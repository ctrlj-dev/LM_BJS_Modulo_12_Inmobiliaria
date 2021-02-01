import emailImage from '../../core/content/img/email_icon.svg';
import phoneImage from '../../core/content/img/telefono_icon.svg';
import { routes } from '../../core/router';

const getImage = property => {
  const image = document.createElement('img');
  image.src = property.image;

  return image;
};

const getTitle = property => {
  const title = document.createElement('h1');
  title.textContent = property.title;

  return title;
};

const getSubtitle = property => {
  const subtitle = document.createElement('h2');

  const rooms = document.createElement('span');
  rooms.textContent = property.rooms;

  const squareMeter = document.createElement('span');
  squareMeter.textContent = property.squareMeter;

  subtitle.appendChild(rooms);
  subtitle.appendChild(squareMeter);

  return subtitle;
};

const getNotes = property => {
  const notes = document.createElement('p');
  notes.textContent = property.notes;

  return notes;
};

const getContactIcons = () => {
  const list = document.createElement('ul');

  const email = document.createElement('li');
  const emailIcon = document.createElement('img');
  emailIcon.src = emailImage;
  email.appendChild(emailIcon);

  const phone = document.createElement('li');
  const phoneIcon = document.createElement('img');
  phoneIcon.src = phoneImage;
  phone.appendChild(phoneIcon);

  list.appendChild(email);
  list.appendChild(phone);

  return list;
};

const getPrice = property => {
  const container = document.createElement('div');
  container.classList.add('contenedor-precio');

  const price = document.createElement('div');
  price.classList.add('precio');
  price.textContent = property.price;

  container.appendChild(price);

  return container;
};

const getPropetyRow = property => {
  const image = getImage(property);

  const title = getTitle(property);
  const subtitle = getSubtitle(property);
  const notes = getNotes(property);

  const navBottom = document.createElement('div');
  navBottom.classList.add('nav-bottom');
  const contactIcons = getContactIcons();
  const price = getPrice(property);
  navBottom.appendChild(contactIcons);
  navBottom.appendChild(price);

  const article = document.createElement('article');

  const figure = document.createElement('figure');
  figure.appendChild(image);
  article.appendChild(figure);

  const description = document.createElement('div');
  article.appendChild(description);
  description.appendChild(title);
  description.appendChild(subtitle);
  description.appendChild(notes);
  description.appendChild(navBottom);

  const row = document.createElement('a');
  row.href = routes.propertyDetail(property.id);
  row.appendChild(article);

  return row;
};

export const addPropertyRows = propertyList => {
  propertyList.forEach(property => {
    const row = getPropetyRow(property);
    const listElement = document.getElementById('property-list');
    listElement.appendChild(row);
  });
};

export const clearPropertyRows = () => {
  const listElement = document.getElementById('property-list');
  listElement.innerHTML = '';
};

const getOption = item => {
  const option = document.createElement('option');
  option.value = item.id;
  option.textContent = item.name;

  return option;
};

export const setOptions = (list, id, defaultValue) => {
  const select = document.getElementById(id);

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = defaultValue;
  select.appendChild(defaultOption);

  list.forEach(item => {
    const option = getOption(item);
    select.appendChild(option);
  });
};
