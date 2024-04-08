import { jsonResponse } from '../../../openapiUtils/jsonResponse.js';
import { token } from '../../../generic/auth.js';
import { user } from '../../schemas/user/user.js';
import { id } from '../../../generic/entity.js';

export const userGet = {
  get: {
    tags: ['User'],
    summary: 'User get by id',
    parameters: [
      {
        in: 'path',
        name: 'id',
        schema: {
          properties: { id },
        },
        required: true,
      },
      {
        in: 'header',
        name: 'token',
        schema: token,
      },
    ],
    responses: {
      200: jsonResponse(user, 'user get by id response'),
      400: jsonResponse(null, 'malformed request'),
      401: jsonResponse(null, 'unauthorized request'),
      403: jsonResponse(null, 'not allowed'),
      404: jsonResponse(null, 'user not found'),
      500: jsonResponse(null, 'server error'),
    },
  },
};
