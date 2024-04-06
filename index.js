import { user } from './src/express/schemas/user/user.js';
import { token, password } from './src/express/schemas/generic/auth.js';

export const schemas = { user, token, password };
export * as expressTypes from './src/express/types/index.js';
