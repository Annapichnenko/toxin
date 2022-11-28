import RoomsService from "../Services/RoomsService.js";

class RoomsController {
  async getAll(req, res) {
    try {
      const rooms = await RoomsService.getAll();
      return res.json(rooms);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async create(req, res) {
    try {
      const room = await RoomsService.create(req.body);

      res.json(room);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new RoomsController();
