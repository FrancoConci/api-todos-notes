/**
 * @description Utility to make a JSON schema or a generic object openapi-compatible, by removing `errorMessages` property.
 * @param {object} schema JSON schema or generic object to clean
 * @returns {object} the original schema, cleaned as per description.
 */
export const cleanSchema = (schema) => {
  delete schema.errorMessages;
  for (let key of Object.keys(schema)) {
    if (typeof schema[key] === 'object') schema[key] = cleanSchema(schema[key]);
  }
  return schema;
};
