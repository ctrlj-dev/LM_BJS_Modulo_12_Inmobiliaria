import {
  setPropertyValues
} from './property-detail.helpers';
import {
  getProperty,
  getEquipmentsList,
  getContact
} from './property-detail.api';
import {
  history
} from '../../core/router/history';
import {
  mapPropertyFromApiToVM,
  mapContactVmToApi
} from './property-details.mappers'
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors
} from '../../common/helpers/element.helpers';
import {
  formValidation
} from './property-details.validations';

const params = history.getParams();

let property = {
  images: '',
  title: '',
  city: '',
  rooms: '',
  squareMeter: '',
  bathrooms: '',
  notes: '',
  mainFeatures: '',
  equipmentIds: '',
  locationUrl: '',
  equipment: '',
}

let contact = {
  email: '',
  message: '',
}


Promise.all([
  getProperty(params.id),
  getEquipmentsList()
]).then(([propertyDetails, equipmentList]) => {
  loadPropertyDetails(propertyDetails, equipmentList)
})

const loadPropertyDetails = (propertyDetails, equipmentList) => {
  const viewModelPropertyDetails = mapPropertyFromApiToVM(propertyDetails, equipmentList);
  setPropertyValues(viewModelPropertyDetails)
  console.log(viewModelPropertyDetails);
}


onUpdateField('email', e => {
  const value = e.target.value;
  contact = {
    ...contact,
    email: value,
  };
  formValidation.validateField('email', contact.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('message', e => {
  const value = e.target.value;
  contact = {
    ...contact,
    message: value,
  };
  formValidation.validateField('message', contact.message).then((result) => {
    onSetError('message', result);
  });
});

onSubmitForm('contact-button', () => {
  formValidation.validateForm(contact).then(result => {
    onSetFormErrors(result);
    const map = mapContactVmToApi(contact);

    if (result.succeeded) {
      getContact(map).then(() => {
        history.back();
      });
    }
  });
});
