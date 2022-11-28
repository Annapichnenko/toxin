import Registration from "./Registration.js";

class RegService {
  async create(data) {
    const createUser = await Registration.create(data);

    return createUser;
  }
  async getAll() {
    const users = await Registration.find();
    return users;
  }
}

export default new RegService();
