const http = require("http");
http.createServer((req, res) => {
  res.end("Multi-stage build - production ready!");
}).listen(3000);
