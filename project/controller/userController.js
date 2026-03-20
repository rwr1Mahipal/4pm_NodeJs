const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, confiramPass } = req.body;

    if (!name || !email || !password) {
      return res.status(401).json({ message: "All filds  are required" });
    }

    if (!password === confiramPass) {
      return res.status(401).json({ message: "Password must be same" });
    }

    const exiUser = await User.findOne({ email });
    if (exiUser) {
      return res.status(401).json({ message: "User is already register" });
    }
    const hasPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hasPass,
    });
    const token = generateToken(newUser._id, res);
    return res
      .status(201)
      .json({ message: "Registration successfull", newUser, token });
  } catch (error) {
    console.error("Error", error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ message: "All Fileds are requied" });
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  const comPass = await bcrypt.compare(password, user.password);
  if (!comPass) {
    return res.status(401).json({ message: "Email and password are invalid" });
  }
const token = generateToken(user._id, res);
  res.status(201).json({ message: "Login successfully", user, token });
};

exports.loadUser = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    res.status(201).json({ message: "User data fetch", user });
  } catch (error) {
    console.error("error: ", error);
  }
};
