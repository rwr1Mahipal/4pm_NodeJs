const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

exports.sendMail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "gamil.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: options.email,
      subject: options.subject,
      text: options.text,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error: ", error);
  }
};
