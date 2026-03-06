const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "David", age: 40 },
];

app.get("/user", (req, res) => {
  res.status(201).json({ message: "Data fetched successfully", users });
});

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.status(201).json({ message: "User fetched", user });
});

app.post("/user/add", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  res.status(201).json({ message: "User added", newUser });
});

app.put("/user/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  user.name = req.body.name;
  user.age = req.body.age;
  res.status(201).json({ message: "User updated", user });
});

app.delete("/user/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.filter((u) => u.id !== id);
  res.status(201).json({ message: "User deleted", user });
});

app.listen(5050, () => {
  console.log("Server is working");
});
