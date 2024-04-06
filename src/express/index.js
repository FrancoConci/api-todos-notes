import { createWriteStream, rmSync, writeFileSync } from 'fs';
import { dump } from 'js-yaml';
import { compile } from 'json-schema-to-typescript';
import { openapi } from './openapi.js';

// Create Openapi yaml
writeFileSync('./src/express/output.yml', dump(openapi, { noRefs: true }), { encoding: 'utf8' });

// Recreate types index and set a writer to it
const typesPath = './src/express/types/index.ts';
rmSync(typesPath, { force: true });
writeFileSync(typesPath, '', { encoding: 'utf8' });
const writer = createWriteStream(typesPath);

// Write types from JSON schema to types index
Object.keys(openapi.components.schemas).forEach((key) => {
  const schema = openapi.components.schemas[key];
  compile(schema, key, { bannerComment: false }).then((ts) =>
    writer.write(ts, (error) => {
      if (error) {
        writer.close();
        writer.end();
      }
    })
  );
});

// Close writer and end stream
writer.on('finish', () => {
  writer.close();
  writer.end();
});
