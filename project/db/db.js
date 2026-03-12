const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

exports.connectDatabase = () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("Database connected"))
      .catch(() => console.log("Error while connection database"));
  } catch (error) {
    console.error("Error: ", error);
  }
};
