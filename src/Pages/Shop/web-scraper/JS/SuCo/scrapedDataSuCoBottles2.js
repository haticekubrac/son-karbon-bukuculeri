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
const url7 = "https://www.ciceksepeti.com/arama?query=suluk%20ve%20matara&qt=suluk%20ve%20matara&OM.zn=q2q";
const url8 = "https://www.ciceksepeti.com/arama?query=suluk%20ve%20matara&qt=suluk%20ve%20matara&OM.zn=q2q&page=2";
const url9 = "https://www.mxZataramasu.co/collections/tum-suco-mataralar";
const url10 = "https://www.mataramasu.co/collections/tum-suco-mataralar?page=2";

const imageUrls = [];

axios(url10)
  .then((resp) => {
    const html = resp.data;
    const $ = cheerio.load(html);
    $("product-card").each(function (oldId) {
      const title = $(this).find(".product-card__title").text();
      const url = "https:" + $(this).find(".product-card__figure").find("img").attr("src");
      const price = $(this).find(".text-subdued").text().trim().replace(/(\D*)(\d+)[ .,]+(\d+[ TL]*$)/, "$2,$3");
      const id = oldId + 48
      imageUrls.push({ title, url, price, id });
    });
    console.log(imageUrls);
    const jsonContent = JSON.stringify(imageUrls);

    fs.writeFile(
      "./scrapedDataSuCoBottles2.json",
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
