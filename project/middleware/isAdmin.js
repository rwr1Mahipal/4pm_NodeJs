exports.isAdmin = (req, res, next) => {
  try {
    const user = req.user;
    if (!user.isAdmin) {
      return res.status(403).json({ message: "Admin not found" });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(505).json({ message: "Error while check Admin" });
  }
};
