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

export const password = {
  description: 'password',
  type: 'string',
  minLength: 8,
  maxLength: 15,
  pattern: '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!?#_&@]).{8,15}$',
  errorMessages: {
    type: 'must be a string',
    minLength: 'must be at least 8 characters',
    maxLength: 'must be at most 15 characters',
    pattern:
      'must contain at least a lower case and an upper case character, a number, and one of these symbols: !?#_&@',
  },
};

export const loginRequest = {
  properties: {
    username,
    password,
    required: ['username', 'password'],
    additionalProperties: false,
    errorMessages: {
      required: 'must contain username and password',
      additionalProperties: 'must not contain additional properties',
    },
  },
};
