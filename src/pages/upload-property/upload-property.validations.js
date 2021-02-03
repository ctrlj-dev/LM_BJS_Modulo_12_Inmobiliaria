import {
  Validators,
  createFormValidation
} from '@lemoncode/fonk';
import {
  arrayRequired
} from '@lemoncode/fonk-array-required-validator';
import {
  isUrl
} from '@lemoncode/fonk-is-url-validator';

const standardErrorMessage = 'Campo requerido';


const validationSchema = {
  field: {
    title: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ0-9]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ0-9\']/
        },
        message: 'Introduzca un título correcto',
      }
    ],
    notes: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ0-9]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ0-9\']/
        },
        message: 'Necesitamos un comentario mas largo',
      }
    ],
    email: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      }
    ],
    phone: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /^[0-9]{1,9}$/
        },
        message: 'Introduzca solo caractéres numéricos',
      }
    ],
    price: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /^[0-9]{1,8}$/
        },
        message: 'Introduzca sólo caracteres numéricos',
      }
    ],
    saleTypeIds: [{
      validator: Validators.required,
      message: standardErrorMessage,
    }],
    address: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ0-9]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ0-9\']/
        },
        message: 'Introduzca una dirección',
      }
    ],
    city: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']/
        },
        message: 'Introduzca una ciudad',
      }
    ],
    provinceId: [{
      validator: Validators.required,
      message: standardErrorMessage,
    }, ],
    squareMeter: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /^[0-9]{1,6}$/
        },
        message: 'Introduzca un número correcto',
      }
    ],
    rooms: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /^[0-9]{1,2}$/
        },
        message: 'Introduzca un número correcto',
      }
    ],
    bathrooms: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /^[0-9]{1,2}$/
        },
        message: 'Introduzca un número correcto',
      }
    ],
    locationUrl: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: isUrl.validator,
        message: 'Introduzca una URL válida',
      }
    ],
    newFeature: [{
      validator: Validators.pattern,
      customArgs: {
        pattern: /[A-Za-zÁÉÍÓÚñáéíóúÑ0-9]{2}?[A-Za-zÁÉÍÓÚñáéíóúÑ0-9\']/
      },
      message: 'Valor incorrecto',
    }],
    mainFeatures: [{
      validator: arrayRequired.validator,
      customArgs: {
        minLength: 1,
        maxLength: 10
      },
      message: 'Introduzca al menos una característica',
    }],
    equipmentIds: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: arrayRequired.validator,
        customArgs: {
          minLength: 0
        },
        message: 'Introduzca al menos una característica',
      }
    ],
    images: [{
        validator: Validators.required,
        message: standardErrorMessage,
      },
      {
        validator: arrayRequired.validator,
        customArgs: {
          minLength: 1
        },
        message: 'Introduzca al menos una imagen',
      }
    ],
  }
};

const validationEquipment = {
  newEquipment: [{
      validator: Validators.required,
      message: standardErrorMessage,
    },
    {
      validator: Validators.pattern,
      customArgs: {
        pattern: /[0-9]/
      },
      message: 'Introduce un valor correcto',
    }
  ],
}

export const formValidation = createFormValidation(validationSchema);
export const equipmentValidation = createFormValidation(validationEquipment);
