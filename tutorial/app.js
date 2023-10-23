const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(3500, () => {
  console.log("server listenong on port : 3500 ..");
});
