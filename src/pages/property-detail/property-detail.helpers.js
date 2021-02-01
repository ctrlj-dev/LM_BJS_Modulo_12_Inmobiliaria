const setMainFeatures = property => {
  const list = document.getElementById('mainFeatures');

  property.mainFeatures.forEach(mainFeature => {
    const li = document.createElement('li');
    li.textContent = mainFeature;
    list.appendChild(li);
  });
};

const setEquipments = property => {
  const list = document.getElementById('equipments');

  property.equipments.forEach(equipment => {
    const li = document.createElement('li');
    li.textContent = equipment;
    list.appendChild(li);
  });
};

const setImages = property => {
  const list = document.getElementById('images');

  property.images.forEach((image, id) => {
    const li = document.createElement('li');
    li.id = `image${id}`;

    const img = getImage(image, id);
    const overlayImg = getOverlayImage(image, id);
    li.appendChild(img);
    li.appendChild(overlayImg);

    list.appendChild(li);
  });
};

const getImage = (image, id) => {
  const container = document.createElement('div');
  container.classList.add('mosaicItem');

  const anchor = document.createElement('a');
  anchor.href = `#popin${id}`;

  const img = document.createElement('img');
  img.src = image;

  container.appendChild(anchor);
  anchor.appendChild(img);

  return container;
};

const getOverlayImage = (image, id) => {
  const container = document.createElement('div');
  container.classList.add('popin');
  container.id = `popin${id}`;

  const anchor = document.createElement('a');
  anchor.href = `#image${id}`;

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imgBox');

  const img = document.createElement('img');
  img.src = image;

  container.appendChild(anchor);
  anchor.appendChild(overlay);
  anchor.appendChild(imageContainer);
  imageContainer.appendChild(img);

  return container;
};

export const setPropertyValues = property => {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = property.mainImage;

  const title = document.getElementById('title');
  title.textContent = property.title;

  const city = document.getElementById('city');
  city.textContent = property.city;

  const rooms = document.getElementById('rooms');
  rooms.textContent = property.rooms;

  const squareMeter = document.getElementById('squareMeter');
  squareMeter.textContent = property.squareMeter;

  const bathrooms = document.getElementById('bathrooms');
  bathrooms.textContent = property.bathrooms;

  const price = document.getElementById('price');
  price.textContent = property.price;

  const notes = document.getElementById('notes');
  notes.textContent = property.notes;

  setMainFeatures(property);
  setEquipments(property);

  const locationUrl = document.getElementById('locationUrl');
  locationUrl.src = property.locationUrl;

  setImages(property);
};
