const express = require("express");
const { register, login, loadUser } = require("../controller/userController");
const { isAuth } = require("../middleware/isAuth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuth, loadUser);

module.exports = router;
