export const codeResponse = {
  description: 'Code response',
  headers: {
    Location: {
      description: 'URI the user will be redirected to in order to request the token',
      schema: {
        type: 'string',
        examples: [
          'https://www.example.com/somepath?code=SplxlOBeZQQYbYS6WxSbIA&state=xyz',
          'https://www.example.com/somepath?error=invalid_request&error_description=description&error_uri=example&state=xzy',
        ],
      },
    },
  },
};
