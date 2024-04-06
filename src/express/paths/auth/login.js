import { jsonRequest } from '../../../openapiUtils/jsonRequest.js';
import { jsonResponse } from '../../../openapiUtils/jsonResponse.js';
import { loginRequest } from '../../schemas/auth/loginRequest.js';
import { loginResponse } from '../../schemas/auth/loginResponse.js';

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
