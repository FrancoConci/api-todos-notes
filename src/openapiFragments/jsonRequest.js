/**
 * @description Utility to generate a json request fragment for the API's JSON schema.
 * @param {string} path Path to use as `$ref` in the API's JSON schema.
 * @param {string} [description] Request description
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
export const jsonRequest = (path, description = 'operation request') => ({
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
 * @description Utility to generate a json request fragment for the API's JSON schema.
 * @param {string[]} paths Paths to use as `$ref` oneOf options in the API's JSON schema.
 * @param {string} [description] Request description
 * @returns A json request fragment with the supplied description and paths as oneOf options
 * `
 * {
    description,
    content: {
        'application/json': {
            schema: {
                oneOf: [
                    {
                        $ref: path,
                    },
                ]
            },
        },
    }
 * `
 */

export const jsonRequestOneOf = (paths, description = 'operation request') => ({
  description,
  content: {
    'application/json': {
      schema: {
        oneOf: paths.map((path) => ({ $ref: path })),
      },
    },
  },
});
