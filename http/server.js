const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(400, { "Content-type": "application/json" });
  res.write("<h1>Hello Students</h1>");
  res.end();
});

server.listen(5050, () => {
  console.log("Welcome to my Server");
});
