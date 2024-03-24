export const id = {
  description: 'user id in uuid format',
  type: 'string',
  length: 12,
  pattern: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89AB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$',
  errorMessages: {
    type: 'must be a string',
    length: 'must be 12 characters long',
    pattern: 'must be a valid UUIDv4',
  },
};

export const username = {
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
};

export const userGetResponse = {
  properties: {
    id,
    username,
  },
  required: ['id', 'username'],
  additionalProperties: false,
  errorMessages: {
    required: 'must contain id and username',
    additionalProperties: 'must not contain additional properties',
  },
};
