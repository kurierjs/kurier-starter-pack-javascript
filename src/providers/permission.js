/**
 * @typedef {import('kurier').ApplicationInstance} ApplicationInstance
 * @typedef {import('kurier').User} User
 */

/**
 * @this ApplicationInstance
 * @param {User} user
 * @returns Promise<string[]>
 */
export async function permissionProvider(/* user */) {
  // Serve your user permissions from here.
  return [];
}
