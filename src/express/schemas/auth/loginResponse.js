import { token } from '../generic/auth.js';

export const loginResponse = {
  type: 'object',
  properties: {
    token,
  },
  required: ['token'],
  additionalProperties: false,
  errorMessages: {
    required: 'must contain token',
    additionalProperties: 'must not contain additional properties',
  },
};
