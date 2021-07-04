import { User as JsonApiUser, Password } from 'kurier';

class User extends JsonApiUser {}

User.schema = {
  attributes: {
    username: String,
    password: Password,
  },
};

export { User };
