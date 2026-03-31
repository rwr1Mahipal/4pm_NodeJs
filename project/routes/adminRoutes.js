const express = require("express");
const { adminLogin, adminUpdate } = require("../controller/userController");
const { isAuth } = require("../middleware/isAuth");
const { isAdmin } = require("../middleware/isAdmin");

const router = express.Router();

router.post("/login", adminLogin);
router.put("/update", isAuth, isAdmin, adminUpdate);

module.exports = router;
