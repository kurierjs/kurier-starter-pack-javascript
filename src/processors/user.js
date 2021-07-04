/**
 * @typedef {import('kurier').Operation} Operation
 */

import { UserProcessor as JsonApiUserProcessor } from 'kurier';
import { v4 as uuid } from 'uuid';

import { User } from '../resources';
import { encryptPassword } from '../services/user-management';

class UserProcessor extends JsonApiUserProcessor {
  async generateId() {
    return uuid();
  }

  /**
   * @param {Operation} op
   */
  async encryptPassword(op) {
    return encryptPassword(op);
  }
}

UserProcessor.resourceClass = User;

export { UserProcessor };
