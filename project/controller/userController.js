const User = require("../model/userModel");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(401).json({ message: "All filds  are required" });
    }

    const exiUser = await User.findOne({ email });
    if (exiUser) {
      return res.status(401).json({ message: "User is already register" });
    }
    const hasPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({ 
      name, 
      email, 
      password: hasPass 
    });
    return res
      .status(201)
      .json({ message: "Registration successfull", newUser });
  } catch (error) {
    console.error("Error", error);
  }
};
