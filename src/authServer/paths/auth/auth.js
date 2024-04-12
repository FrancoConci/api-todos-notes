import { code, grantType } from '../../../generic/auth.js';
import { id } from '../../../generic/entity.js';
import { jsonResponse } from '../../../openapiUtils/jsonResponse.js';
import { client } from '../../schemas/clients/components.js';
import { codeResponse } from '../../schemas/codes/components.js';

export const auth = {
  get: {
    tags: ['Auth'],
    summary: 'Auth endpoint',
    parameters: [
      {
        in: 'query',
        name: 'response_type',
        description: 'Expected response type',
        schema: { type: 'string', enum: ['code'] },
        required: true,
      },
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
        description: 'Redirect URI',
        schema: { type: 'string' },
        required: false,
      },
      {
        in: 'query',
        name: 'scope',
        description: 'Scope',
        schema: { type: 'string' },
        required: false,
      },
      {
        in: 'query',
        name: 'state',
        description: 'Application-defined state',
        schema: { type: 'string' },
        required: false,
      },
    ],
    responses: {
      302: jsonResponse(codeResponse, 'Code response'),
      500: jsonResponse(null, 'server error'),
    },
  },
};
