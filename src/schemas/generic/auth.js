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

export const token = {
  description: 'jwt token returned when authenticating successfully',
  type: 'string',
  errorMessages: {
    type: 'must be a string',
  },
};
