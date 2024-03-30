import token from '../generic/auth';

export const loginResponse = {
  token,
  required: ['token'],
  additionalProperties: false,
  errorMessages: {
    required: 'must contain token',
    additionalProperties: 'must not contain additional properties',
  },
};
