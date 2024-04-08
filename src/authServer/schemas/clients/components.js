export const client = {
  properties: {
    clientType: {
      type: 'string',
      description: 'Client type as described by rfc6749',
      enum: ['confidential', 'public'],
    },
    redirectUrl: {
      type: 'string',
      description: 'Redirect url as specified by rfc6749',
    },
    scopes: {
      type: 'array',
      description: 'List of available scopes',
      minItems: 1,
      maxItems: 100,
      items: {
        type: 'string',
        description: 'Application scope',
      },
    },
    applicationName: {
      type: 'string',
      description: 'Application name',
      minLength: 1,
      maxLength: 256,
    },
    ApplicationUrl: {
      type: 'string',
      description: 'Application Url',
      minLength: 1,
      maxLength: 256,
    },
    description: {
      type: 'string',
      description: 'Application description',
      minLength: 1,
      maxLength: 524,
    },
    logo: {
      type: 'string',
      description: 'Application logo encoded in base64',
    },
  },
  required: ['clientType', 'redirectUrl', 'scopes'],
  additionalProperties: false,
  errorMessages: {
    clientType: 'Unknown client type',
    redirectUrl: 'Must specify a valid redirect url',
    scopes: 'Must specify between 1 and 100 valid scopes',
    applicationName: 'Must specify a valid application name',
    applicationUrl: 'Must specify a valid application url',
    description: 'Must specify a valid description',
    logo: 'Must specify a valid logo',
    additionalProperties: 'Must not contain additional properties',
  },
};
