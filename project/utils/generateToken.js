const jwt = require("jsonwebtoken");

exports.generateToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.TOKEN_SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIREIN,
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
