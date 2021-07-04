/**
 * @typedef {import('kurier').Operation} Operation
 * @typedef {import('kurier').ResourceAttributes} ResourceAttributes
 */

import { hash } from '../utils/hash.js';

/**
 * @param {Operation} op
 * @param {User} user
 */
export async function login(op, user) {
  return op.data.attributes.username === user.username && (await encryptPassword(op)).password === user.password;
}

/**
 * @param {Operation} op
 */
export async function encryptPassword(op) {
  return {
    password: hash(op.data.attributes.password, process.env.SESSION_KEY),
  };
}
