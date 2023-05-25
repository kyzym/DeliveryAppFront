export const validationRules = {
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must have at least 2 characters',
    },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email address',
    },
  },
  phone: {
    required: 'Phone number is required',
    minLength: {
      value: 6,
      message: 'Phone number must have at least 6 digits',
    },
    maxLength: {
      value: 10,
      message: 'Phone number cannot exceed 10 digits',
    },
    pattern: {
      value: /^\d+$/,
      message: 'Phone number can only contain digits',
    },
  },
  address: {
    required: 'Address is required',
    minLength: {
      value: 6,
      message: 'Address  must have at least 6 characters',
    },
    maxLength: {
      value: 30,
      message: 'Address  must have at least 30 characters',
    },
  },
};
