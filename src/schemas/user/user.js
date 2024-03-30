export const user = {
  description: 'user schema',
  type: 'object',
  properties: {
    id: {
      description: 'user id in uuid format',
      type: 'string',
      pattern:
        '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89AB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$',
      errorMessages: {
        type: 'must be a string',
        length: 'must be 12 characters long',
        pattern: 'must be a valid UUIDv4',
      },
    },
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
  required: ['id', 'username'],
  errorMessages: {
    type: 'must be an object',
    required: 'properties are missing',
    additionalProperties: 'additional properties are not allowed',
  },
};
