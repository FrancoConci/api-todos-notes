import { user } from '../user/user';
import { password } from '../generic/auth';

export const loginRequest = {
  properties: {
    username: user.properties.username,
    password,
    required: ['username', 'password'],
    additionalProperties: false,
    errorMessages: {
      required: 'must contain username and password',
      additionalProperties: 'must not contain additional properties',
    },
  },
};
