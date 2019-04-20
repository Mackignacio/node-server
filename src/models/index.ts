import { users } from "./lib/users.model";

const models: { [k: string]: any } = {
  users
};

export default models;

export class Models {
  private models: { [k: string]: any } = { users };

  find(name: string) {
    return this.models[name];
  }

  create(name: string, value: {}) {
    return new models[name](value);
  }
}
