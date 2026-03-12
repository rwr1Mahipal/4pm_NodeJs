const express = require("express");
const dotenv = require("dotenv");
const { connectDatabase } = require("./db/db");
const userRouter = require("./routes/userRoutes");


dotenv.config();

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

connectDatabase();

app.use("/api/v1/user", userRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is working on port: ${process.env.PORT}`);
});
