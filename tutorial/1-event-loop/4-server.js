const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("hello world");
});

server.listen(3500, () => {
  console.log("server listenong on port : 3500 ..");
});
