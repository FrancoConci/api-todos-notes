export const id = {
  description: 'entity id in uuid format',
  type: 'string',
  pattern: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89AB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$',
  errorMessages: {
    type: 'must be a string',
    length: 'must be 12 characters long',
    pattern: 'must be a valid UUIDv4',
  },
};
