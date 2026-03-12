const User = require("../model/userModel");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(401).json({ message: "All filds  are required" });
    }

    const newUser = await User.create({ name, email, password });
    return res
      .status(201)
      .json({ message: "Registration successfull", newUser });
  } catch (error) {
    console.error("Error", error);
  }
};
