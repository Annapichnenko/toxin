import Room from "../Schemas/Room.js";

class RoomsService {
  async getAll() {
    const users = await Room.find();
    return users;
  }
  async create(room) {
    const createRoom = await Room.create(room);

    return createRoom;
  }
}

export default new RoomsService();
