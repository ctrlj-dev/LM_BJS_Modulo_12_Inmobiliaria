import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    email: [
      {
        validator: Validators.email,
        message: 'Necesitamos un email válido',
      },
      {
        validator: Validators.required,
        message: 'Este campo es requerido',
      },
    ],
    message: [
      {
        validator: Validators.required,
        message: 'Este campo es requerido',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 10 },
        message: 'Este campo es requerido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
