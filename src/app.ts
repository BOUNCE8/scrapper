const server = require("./server.ts");

const app = () => {
  return server.getData("https://news.sky.com");
};

app();
