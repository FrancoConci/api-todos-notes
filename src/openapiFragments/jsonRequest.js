export const jsonRequest = (path = '', description = 'operation request') => ({
  description,
  content: {
    'application/json': {
      schema: {
        $ref: path,
      },
    },
  },
});

export const jsonRequestOneOf = (paths = [''], description = 'operation request') => ({
  description,
  content: {
    'application/json': {
      schema: {
        oneOf: paths.map((path) => ({ $ref: path })),
      },
    },
  },
});
