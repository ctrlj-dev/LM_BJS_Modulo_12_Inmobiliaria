export const mapUploadPropertyFromApiToVM = (property) => {
  return {
    id: property.id,
    title: property.title,
    notes: property.notes,
    email: property.email,
    phone: property.phone,
    price: parseInt(property.price),
    saleTypeIds: Array.isArray(property.saleTypeIds) ? property.saleTypeIds : '',
    address: property.address,
    city: property.city,
    provinceId: property.provinceId,
    squareMeter: parseInt(property.squareMeter),
    rooms: parseInt(property.rooms),
    bathrooms: parseInt(property.bathrooms),
    locationUrl: property.locationUrl,
    mainFeatures: Array.isArray(property.mainFeatures) ? property.mainFeatures : '',
    equipmentIds: Array.isArray(property.equipmentIds) ? property.equipmentIds : '',
    images: Array.isArray(property.images) ? property.images : '',
  };
};
