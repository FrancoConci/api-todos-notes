import { login } from './endpoints/auth/login';
import { userGet } from './endpoints/user/userGet';
import { loginRequest } from './schemas/auth/loginRequest';
import { loginResponse } from './schemas/auth/loginResponse';
import { userGetResponse } from './schemas/user/userGetResponse';

export const openapi = {
  openapi: '3.0.0',
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
    '/auth/login': login,
    '/users/{id}': userGet,
  },
  components: {
    schemas: {
      loginRequest,
      loginResponse,
      userGetResponse,
    },
  },
};
