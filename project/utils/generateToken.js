const jwt = require("jsonwebtoken");

exports.generateToken = (id, res) => {
  const token = jwt.sign({ id }, "jhfgjhgjgnb", {
    expiresIn: "7d",
  });

  const options = {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
  };

  res.cookie("token", token, options);
  return token;
};
