import { cleanSchema } from '../openapiUtils/cleanSchema.js';
import { login } from './paths/auth/login.js';
import { userGet } from './paths/users/users.js';
import { password, token } from './schemas/generic/auth.js';
import { user } from './schemas/user/user.js';

export const openapi = {
  openapi: '3.1.0',
  servers: [
    {
      description: 'todo',
      url: 'http://localhost:3000/',
    },
  ],
  info: {
    contact: {
      name: 'Franco',
      email: 'franco1conci@gmail.com',
      url: 'https://www.linkedin.com/in/franco-conci/',
    },
    version: '0.0.3',
    title: 'Todo api',
    description:
      '### Introduction\n  Endpoints specifications and data structures for Todo API\\\n',
  },
  paths: {
    '/api/auth/login': cleanSchema(login),
    '/api/users/{id}': cleanSchema(userGet),
  },
  components: {
    schemas: {
      user: cleanSchema(user),
      password: cleanSchema(password),
      token: cleanSchema(token),
    },
  },
};
