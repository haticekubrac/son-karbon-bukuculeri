const PORT = 4000;

const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const fs = require("fs");
const app = express();

const url = "https://www.mediamarkt.com.tr/tr/category/_laptop-504926.html";
const url2 =
  "https://www.mediamarkt.com.tr/tr/category/_bilgisayar-tablet-aksesuarlar%C4%B1-640515.html";
const url3 =
  "https://www.mediamarkt.com.tr/tr/category/_%C3%A7anta-k%C4%B1l%C4%B1f-640518.html";
const url4 = "https://www.mediamarkt.com.tr/tr/category/_mutfak-806547.html";
const url5 = "https://www.ciceksepeti.com/bez-canta";
const url6 = "https://www.ciceksepeti.com/bez-canta?page=2";

const imageUrls = [];

axios(url6)
  .then((resp) => {
    const html = resp.data;
    const $ = cheerio.load(html);
    $(".products__item").each(function (oldId) {
      const title = $(this).find(".products__item-title").text();
      const url = $(this).find(".products__item-img-container").find("img").attr("data-src");
      const price = $(this).find(".price.price--now").text().trim().replace(/(\D*)(\d+)[ ,]+(\d+[ TL]+$)/, "$2,$3");
      const id = oldId+60
      imageUrls.push({ title, url, price, id });
    });
    console.log(imageUrls);
    const jsonContent = JSON.stringify(imageUrls);

    fs.writeFile(
      "./scrapedDataClothBags2.json",
      jsonContent,
      "utf8",
      function (err) {
        if (err) {
          return console.log(err);
        }

        console.log("The file was saved!");
      }
    );
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log("server running"));
