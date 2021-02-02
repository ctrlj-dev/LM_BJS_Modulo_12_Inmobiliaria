import Axios from 'axios';

const url = process.env.BASE_API_URL + '/properties';
const equipmentsUrl = process.env.BASE_API_URL + '/equipments';
const contactURL = process.env.BASE_API_URL + '/contact';


export const getProperty = id => Axios.get(url + '/' + id).then(response => {
  return response.data;
});

export const getEquipmentsList = () => Axios.get(equipmentsUrl).then(response => {
  return response.data;
});

export const getContact = contact =>
Axios.post(contactURL, contact).then(response => {
  return response.data
})

