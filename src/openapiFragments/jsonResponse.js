/**
 * @description Utility to generate a json response fragment for the API's JSON schema.
 * @param {string} [description] Response description
 * @returns A json response fragment with the supplied description
 * * `
 * {
    description,
    }
 * `
 */
export const jsonResponseEmpty = (description = 'empty response') => ({
  description,
});

/**
 * @description Utility to generate a json response fragment for the API's JSON schema.
 * @param {string} path Path to use as `$ref` in the API's JSON schema.
 * @param {string} [description] Response description
 * @returns A json request fragment with the supplied path and description
 * * `
 * {
    description,
    content: {
        'application/json': {
            schema: {
              $ref: path,
            },
        },
    }
 * `
 */
export const jsonResponse = (path = '', description = 'operation success') => ({
  description,
  content: {
    'application/json': {
      schema: {
        $ref: path,
      },
    },
  },
});

/**
 * @description Utility to generate a json response fragment for the API's JSON schema.
 * @param {string} path Path to use as `$ref` in the API's JSON schema.
 * @param {string} [description] Response description
 * @returns A json request fragment with the supplied path and description
 * * `
 * {
    description,
    content: {
        'application/json': {
            schema: {
              $ref: path,
            },
        },
    }
 * `
 */
export const jsonResponseOneOf = (paths = [''], description = 'operation success') => ({
  description,
  content: {
    'application/json': {
      schema: {
        oneOf: paths.map((path) => ({ $ref: path })),
      },
    },
  },
});
