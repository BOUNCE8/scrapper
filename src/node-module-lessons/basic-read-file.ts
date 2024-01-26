const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("./src/files/demofile1.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      //   res.write(data);
      return res.end(data);
    });
  })
  .listen(8080);
