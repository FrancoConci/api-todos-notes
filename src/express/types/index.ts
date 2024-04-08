/**
 * user schema
 */
export interface User {
  /**
   * user name
   */
  username: string;
}
/**
 * password
 */
export type Password = string;
/**
 * jwt token returned when authenticating successfully
 */
export type Token = string;
