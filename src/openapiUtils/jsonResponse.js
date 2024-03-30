/**
 * @description Utility to generate a json response fragment for the API's JSON schema.
 * @param {object[] | object | null | undefined} schema request JSON schema. Leave empty to generate an empty reponse, use array to generate oneOf reponse.
 * @param {string} [description] Response description
 * @returns A json request fragment with the supplied schema and description
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
export const jsonResponse = (schema = null, description = 'operation success') => {
  // Empty response
  if (!schema) return { description };

  // Single schema response
  let schemaArray = schema;
  if (!Array.isArray(schema)) {
    schemaArray = [schema];
  }
  if (schemaArray.length === 1)
    return {
      description,
      content: {
        'application/json': {
          schema: schemaArray[0],
        },
      },
    };

  // OneOf response
  return {
    description,
    content: {
      'application/json': {
        schema: {
          oneOf: schemaArray.map((schema) => ({ schema })),
        },
      },
    },
  };
};
