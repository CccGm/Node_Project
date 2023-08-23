const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  } else if (req.url === "/about") {
    res.end("about page showing");
  } else {
    res.end(`
      <h1> Oops!</h1>
      <p> no page found </p>
      <a href="/">back home</a>`);
  }
});

server.listen(5000);
