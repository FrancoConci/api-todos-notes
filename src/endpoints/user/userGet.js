import { jsonResponse, jsonResponseEmpty } from '../../openapiFragments/jsonResponse';
import { token } from '../../schemas/auth/loginResponse';
import { id as userId } from '../../schemas/user/userGetResponse';

export const userGet = {
  get: {
    tags: ['User'],
    summary: 'User get by id',
    parameters: [
      {
        in: 'path',
        name: 'id',
        schema: userId,
        required: true,
      },
      {
        in: 'header',
        name: 'token',
        schema: token,
      },
    ],
    responses: {
      200: jsonResponse('#/components/schemas/userGetResponse', 'user get by id response'),
      400: jsonResponseEmpty('malformed request'),
      401: jsonResponseEmpty('unauthorized request'),
      403: jsonResponseEmpty('not allowed'),
      404: jsonResponseEmpty('user not found'),
      500: jsonResponseEmpty('server error'),
    },
  },
};
