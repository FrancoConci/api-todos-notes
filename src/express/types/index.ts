/**
 * user schema
 */
export interface User {
  /**
   * user id in uuid format
   */
  id: string;
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
