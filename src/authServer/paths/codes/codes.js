import { code, grantType } from '../../../generic/auth.js';
import { id } from '../../../generic/entity.js';
import { jsonResponse } from '../../../openapiUtils/jsonResponse.js';
import { client } from '../../schemas/clients/components.js';
import { codeResponse } from '../../schemas/codes/components.js';

export const codes = {
  get: {
    tags: ['Codes'],
    summary: 'Code exchange',
    parameters: [
      {
        in: 'query',
        name: 'client_id',
        description: 'Client id',
        schema: { properties: { id } },
        required: true,
      },
      {
        in: 'query',
        name: 'redirect_uri',
        description: 'Redirect url',
        schema: { properties: { redirectUrl: client.properties.redirectUrl } },
        required: true,
      },
      {
        in: 'query',
        name: 'grant_type',
        description: 'Grant type',
        schema: { properties: { grantType } },
        required: true,
      },
      {
        in: 'query',
        name: 'code',
        description: 'code',
        schema: { properties: { code } },
        required: true,
      },
    ],
    responses: {
      302: codeResponse,
      500: jsonResponse(null, 'server error'),
    },
  },
};
