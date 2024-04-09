export interface Client {
  /**
   * Client type as described by rfc6749
   */
  clientType: "confidential" | "public";
  /**
   * Redirect url as specified by rfc6749
   */
  redirectUrl: string;
  /**
   * List of available scopes
   *
   * @minItems 1
   * @maxItems 100
   */
  scopes: [string, ...string[]];
  /**
   * Application name
   */
  applicationName?: string;
  /**
   * Application Url
   */
  ApplicationUrl?: string;
  /**
   * Application description
   */
  description?: string;
  /**
   * Application logo encoded in base64
   */
  logo?: string;
}
/**
 * Code to exchange for an auth token
 */
export type Code = string;
