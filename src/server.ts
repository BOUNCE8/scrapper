const axios = require("axios");
const express = require("express");

const server = express();

const PORT = process.env.port || 3000;

const getData = async (siteAddress) => {
  try {
    const response = await axios.get(siteAddress);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

server.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});

module.exports = { getData };
