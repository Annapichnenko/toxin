import Registration from "../Registration.js";

class LoginController {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await Registration.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "User с таким email не существует" });
    } else if (password === user.password) {
      res.status(200).json(user);
    } else {
      res.status(400).json({
        message: "Пароль неверный",
      });
    }

    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new LoginController();
