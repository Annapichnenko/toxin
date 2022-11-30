import Data from "../Schemas/Data.js";

class DataService {
  async getTitle() {
    const data = await Data.find();

    return data;
  }

  async create(data) {
    const createTitle = await Data.create(data);

    return createTitle;
  }
}

export default new DataService();
