import DataService from "../Services/DataService.js";

class DataController {
  async getTitle(req, res) {
    try {
      const title = await DataService.getTitle();
      return res.json(title);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async create(req, res) {
    try {
      const data = await DataService.create(req.body);

      res.json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new DataController();
