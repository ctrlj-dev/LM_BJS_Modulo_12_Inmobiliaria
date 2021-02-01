const baseRoutes = {
  propertyList: '/pages/property-list/property-list.html',
  propertyDetail: '/pages/property-detail/property-detail.html',
  uploadProperty: '/pages/upload-property/upload-property.html',
};

export const routes = {
  ...baseRoutes,
  propertyDetail: id => (id ? `${baseRoutes.propertyDetail}?id=${id}` : baseRoutes.propertyDetail),
};
