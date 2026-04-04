const http = require("http");
http.createServer((req, res) => {
  res.end("Docker Compose Build Lab - Updated!");
}).listen(3000);
