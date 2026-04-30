const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    otp: {
      type: String,
    },
    expireAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("OTP", otpSchema);
