import { user } from './src/schemas/user/user.js';
import { token, password } from './src/schemas/generic/auth.js';

export const schemas = { user, token, password };
export * as types from './src/types/index.js';
