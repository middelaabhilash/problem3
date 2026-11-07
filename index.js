const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("I am a Ninja");
  }
});

server.listen(3000, () => {
  console.log("server is listening at port 3000");
});

module.exports = server;
