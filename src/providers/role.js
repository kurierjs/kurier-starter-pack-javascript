/**
 * @typedef {import('kurier').ApplicationInstance} ApplicationInstance
 * @typedef {import('kurier').User} User
 */

/**
 * @this ApplicationInstance
 * @param {User} user
 * @returns Promise<string[]>
 */
export async function roleProvider(/* user */) {
  // Serve your user roles from here.
  return [];
}
