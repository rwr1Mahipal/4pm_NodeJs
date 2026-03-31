const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");


cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

const stroage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "4pm",
    allowed_formats: ["jpg", "jpeg", "png", "pdf","webp"],
  },
});

const upload = multer({ stroage });
module.exports = upload;
