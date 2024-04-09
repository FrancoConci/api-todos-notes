import { jsonRequest } from '../../../openapiUtils/jsonRequest.js';
import { jsonResponse } from '../../../openapiUtils/jsonResponse.js';
import { client } from '../../schemas/clients/components.js';
import { id } from '../../../generic/entity.js';

export const clients = {
  post: {
    tags: ['Client'],
    summary: 'Client registration',
    requestBody: jsonRequest(client, 'client request'),
    responses: {
      200: jsonResponse({ properties: { id } }, 'client response'),
      400: jsonResponse(null, 'malformed request'),
      401: jsonResponse(null, 'unauthorized'),
      409: jsonResponse(null, 'conflicted request'),
      500: jsonResponse(null, 'server error'),
    },
  },
};
