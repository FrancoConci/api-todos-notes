export const token = {
  description: 'jwt token returned when authenticating successfully',
  type: 'string',
  errorMessages: {
    type: 'must be a string',
  },
};

export const loginResponse = {
  token,
  required: ['token'],
  additionalProperties: false,
  errorMessages: {
    required: 'must contain token',
    additionalProperties: 'must not contain additional properties',
  },
};
