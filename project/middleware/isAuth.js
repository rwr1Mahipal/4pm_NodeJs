const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "User is not authoticated" });
  }

  try {
    const decoded = jwt.verify(token, "jhfgjhgjgnb");
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    console.log("Error: ", error);
  }
};
