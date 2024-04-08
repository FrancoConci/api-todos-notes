export const user = {
  description: 'user schema',
  type: 'object',
  properties: {
    username: {
      description: 'user name',
      type: 'string',
      minLength: 3,
      maxLength: 15,
      pattern: '^([A-Za-z0-9!?_]){3,15}$',
      errorMessages: {
        type: 'must be a string',
        minLength: 'must be at least 3 characters',
        maxLength: 'must be at most 15 characters',
        pattern: 'can only contain alphanumeric characters, underscores, and the !? characters',
      },
    },
  },
  additionalProperties: false,
  required: ['username'],
  errorMessages: {
    type: 'must be an object',
    required: 'properties are missing',
    additionalProperties: 'additional properties are not allowed',
  },
};
