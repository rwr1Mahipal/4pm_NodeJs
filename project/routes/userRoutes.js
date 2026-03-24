const express = require("express");
const {
  register,
  login,
  loadUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const { isAuth } = require("../middleware/isAuth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuth, loadUser);
router.put("/update", isAuth, updateUser);
router.delete("/delete/:id", isAuth, deleteUser);

module.exports = router;
