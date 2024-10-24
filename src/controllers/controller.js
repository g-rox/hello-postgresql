const service = require("../services/service");

exports.getUsers = async (req, res) => {
  try {
    const user = await service.getUsers();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await service.createUser(name, email);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
