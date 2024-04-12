import { token } from '../../../generic/auth.js';

export const tokenResponse = {
  description: 'Token response',
  properties: {
    access_token: token,
    token_type: {
      type: 'string',
      description: 'Token type and how to use it',
    },
    scope: {
      type: 'array',
      description: 'List of available scopes',
      minItems: 1,
      maxItems: 100,
      items: {
        type: 'string',
        description: 'Application scope',
      },
    },
    expires_in: {
      type: 'string',
      description: 'Expiration timer in ms',
      pattern: '^([1-9]){1}(([0-9]){0,6})?$',

      minLength: 1,
      maxLength: 256,
    },
    state: {
      type: 'string',
      description:
        'State as sent via the request. Required only if it had been sent by the request',
      minLength: 1,
      maxLength: 256,
    },
  },
  required: ['token_type', 'scope', 'expires_in'],
  additionalProperties: false,
  errorMessages: {
    token_type: 'Must specify a valid token type',
    scope: 'Must specify a valid scope',
    expires_in: 'Must specify a valid expirationd date',
  },
};

export const tokenErrorResponse = {
  properties: {
    error: {
      type: 'string',
      description: 'Token request error',
      enum: [
        'invalid_request',
        'unauthorized_client',
        'access_denied',
        'unsupported_response_type',
        'invalid_scope',
        'server_error',
        'temporarily_unavailable',
        'invalid_request',
      ],
    },
    error_description: {
      type: 'string',
      description: 'Error description',
    },
    error_uri: {
      type: 'string',
      description:
        'A URI identifying a human-readable web page with information about the error, used to provide the client developer with additional information about the error.',
    },
  },
};
