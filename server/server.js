const express = require("express");

const app = express();

const user = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "David", age: 40 },
];

app.get("/home", (req, res) => {
  res.status(201).json({ message: "Data fetched successfully", user });
});

app.listen(5050, () => {
  console.log("Server is working");
});
