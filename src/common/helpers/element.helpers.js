export const onUpdateField = (id, callback) => {
  const element = document.getElementById(id);
  element.oninput = event => callback(event);

  if (element.type !== 'checkbox') {
    element.onblur = event => callback(event);
  }
};

export const onSubmitForm = (id, callback) => {
  const element = document.getElementById(id);
  element.onclick = e => {
    e.preventDefault();
    callback();
  };
};

export const onAddFile = (id, callback) => {
  const input = document.getElementById(id);
  input.onchange = () => {
    const file = input.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      callback(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
};

export const onSetError = (id, error) => {
  if (error.succeeded) {
    removeElementClass(id);
    setErrorMessage(id, '');
  } else {
    setElementClass(id);
    setErrorMessage(id, error.message);
  }
};

const setElementClass = id => {
  const element = document.getElementById(id);
  if (element) {
    element.classList.add('error');
  }
};

const removeElementClass = id => {
  const element = document.getElementById(id);
  if (element) {
    element.classList.remove('error');
  }
};

const setErrorMessage = (id, message) => {
  const messageElement = document.getElementById(`${id}-error`);
  if (messageElement) {
    messageElement.textContent = message;
  }
};

export const onSetFormErrors = ({ fieldErrors }) => {
  Object.entries(fieldErrors).forEach(([key, value]) => {
    onSetError(key, value);
  });
};

const setValue = (element, value) => {
  const elementType = element.tagName.toLowerCase();
  if (elementType === 'select' || elementType === 'input') {
    element.value = value;
  } else {
    element.textContent = value;
  }
};

const onSetValue = (id, value) => {
  const element = document.getElementById(id);
  console.log({ element });
  if (element) {
    setValue(element, value);
  }
};

export const onSetValues = values => {
  Object.entries(values).forEach(([key, value]) => onSetValue(key, value));
};
