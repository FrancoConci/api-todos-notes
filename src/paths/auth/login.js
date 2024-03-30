import { jsonRequest } from '../../openapiUtils/jsonRequest';
import { jsonResponse } from '../../openapiUtils/jsonResponse';
import { loginRequest } from '../../schemas/auth/loginRequest';
import { loginResponse } from '../../schemas/auth/loginResponse';

export const login = {
  post: {
    tags: ['Auth'],
    summary: 'User login',
    requestBody: jsonRequest(loginRequest, 'login request'),
    responses: {
      200: jsonResponse(loginResponse, 'login response'),
      400: jsonResponse(null, 'malformed request'),
      401: jsonResponse(null, 'unauthorized'),
      500: jsonResponse(null, 'server error'),
    },
  },
};
