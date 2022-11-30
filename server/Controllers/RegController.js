import RegService from "../Services/RegService.js";

class RegController {
  async create(req, res) {
    try {
      const data = await RegService.create(req.body);

      res.json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const users = await RegService.getAll();
      return res.json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new RegController();
