import { createHmac } from 'crypto';

/**
 * @param {string} plainTextPassword
 * @param {string} hashKey
 * @param {string} algorithm
 */
export function hash(plainTextPassword, hashKey, algorithm = 'sha512') {
  const hash = createHmac(algorithm, hashKey);
  hash.update(plainTextPassword);
  return hash.digest('hex');
}
