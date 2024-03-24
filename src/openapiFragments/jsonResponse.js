export const jsonResponseEmpty = (description = 'empty response') => ({
  description,
});

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
