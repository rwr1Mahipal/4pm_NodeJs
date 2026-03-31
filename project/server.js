const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser')

const { connectDatabase } = require("./db/db");
const userRouter = require("./routes/userRoutes");
const adminRouter = require("./routes/adminRoutes");


dotenv.config();

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectDatabase();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is working on port: ${process.env.PORT}`);
});
