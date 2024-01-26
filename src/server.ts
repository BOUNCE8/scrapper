const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");

const server = express();

const PORT = process.env.port || 3000;

const getData = async (siteAddress) => {
  try {
    const response = await axios.get(siteAddress);
    // console.log(response);
    const $ = cheerio.load(response);

    let content = [];

    console.log(
      $(".sdc-site-tile__headline", response).each(function () {
        const title = $(this).text();
        const url = $(this).find("a").attr("href");

        content.push({ title, url });

        server.get("/", (req, res) => {
          res.end(content);
        });
      })
    );
  } catch (error) {
    console.log(error);
  }
};

server.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});

module.exports = { getData };
