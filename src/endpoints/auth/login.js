import { jsonRequest } from '../../openapiFragments/jsonRequest';
import { jsonResponse, jsonResponseEmpty } from '../../openapiFragments/jsonResponse';

export const login = {
  post: {
    tags: ['Auth'],
    summary: 'User login',
    requestBody: jsonRequest('#/components/schemas/loginRequest', 'login request'),
    responses: {
      200: jsonResponse('#/components/schemas/loginResponse', 'login response'),
      400: jsonResponseEmpty('malformed request'),
      401: jsonResponseEmpty('unauthorized'),
      500: jsonResponseEmpty('server error'),
    },
  },
};
