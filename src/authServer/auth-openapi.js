import { cleanSchema } from '../openapiUtils/cleanSchema.js';
import { clients } from './paths/clients/clients.js';
import { client } from './schemas/clients/components.js';

export const authOpenapi = {
  openapi: '3.1.0',
  servers: [
    {
      description: 'auth',
      url: 'http://localhost:3000/',
    },
  ],
  info: {
    contact: {
      name: 'Franco',
      email: 'franco1conci@gmail.com',
      url: 'https://www.linkedin.com/in/franco-conci/',
    },
    version: '0.0.1',
    title: 'Auth api',
    description:
      '### Introduction\n  Endpoints specifications and data structures for Auth server api\\\n',
  },
  paths: {
    // Register client
    '/api/clients': cleanSchema(clients),
    // Exchange code
    //TODO
    // '/api/code': cleanSchema(code),
    // Authorize requests
    // TODO
    // '/auth': cleanSchema(auth),
    // User management
    // TODO
    // '/signup': cleanSchema(signup),
  },
  components: {
    schemas: {
      client: cleanSchema(client),
    },
  },
};