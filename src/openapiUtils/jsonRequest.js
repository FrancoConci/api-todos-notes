/**
 * @description Utility to generate a json request fragment for the API's JSON schema.
 * @param {object | object[]} schema Request JSON schema. Use a list to generate a oneOf request
 * @param {string} [description] Request description
 * @returns A json request fragment with the supplied path and description
 * * `
 * {
    description,
    content: {
        'application/json': {
            schema,
        },
    }
 * `
 */
export const jsonRequest = (schema, description = 'operation request') => {
  // Single schema request
  let schemaArray = schema;
  if (!Array.isArray(schema)) {
    schemaArray = [schema];
  }
  if (schemaArray.length === 1)
    return {
      description,
      content: {
        'application/json': {
          schema,
        },
      },
    };

  // OneOf request
  return {
    description,
    content: {
      'application/json': {
        oneOf: schemaArray.map((schema) => ({ schema })),
      },
    },
  };
};
