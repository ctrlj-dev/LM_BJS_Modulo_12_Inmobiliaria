export const mapPropertyFromApiToVM = (properties, equipmentList) => {

  return {
    ...properties,
    id: properties.id,
    address: properties.address,
    mainImage: Array.isArray(properties.images) ? properties.images[0] : '',
    price: properties.price.toLocaleString() + ' €',
    images: properties.images,
    title: properties.title,
    city: properties.city,
    rooms: properties.rooms + getRoomWord(properties.rooms),
    squareMeter: properties.squareMeter + 'm2',
    bathrooms: properties.bathrooms + getBathRoomWord(properties.bathrooms),
    notes: properties.notes,
    mainFeatures: properties.mainFeatures,
    locationUrl: properties.locationUrl,
    equipments: transformEquipment(properties, equipmentList),
  };
};

const getRoomWord = (rooms) => {
  return rooms > 1 ? ' habitaciones' : ' habitación';
}

const getBathRoomWord = bathrooms => {
  return bathrooms > 1 ? ' baños' : ' baño';
}

const transformEquipment = (property, equipmentsList) => {
  const equipments = property.equipmentIds.map(obj => {
    return equipmentsList.find(element => element.id === obj).name;
  });
  return equipments;
};

export const mapContactVmToApi = contact => {
  return {
    accountId: contact.accountId,
    email: contact.email,
    message: contact.message,
  };
}
