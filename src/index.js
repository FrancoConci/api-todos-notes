import { dump } from 'js-yaml';
import { writeFileSync } from 'fs';
import { openapi } from './openapi.js';

writeFileSync('./output.yml', dump(openapi, { noRefs: true }), { encoding: 'utf8' });
