const PORT = 4000;

import fs from "fs"


const url = "https://www.mediamarkt.com.tr/tr/category/_laptop-504926.html";
const url2 =
  "https://www.mediamarkt.com.tr/tr/category/_bilgisayar-tablet-aksesuarlar%C4%B1-640515.html";
const url3 =
  "https://www.mediamarkt.com.tr/tr/category/_%C3%A7anta-k%C4%B1l%C4%B1f-640518.html";
const url4 = "https://www.mediamarkt.com.tr/tr/category/_mutfak-806547.html";
const url5 = "https://www.ciceksepeti.com/bez-canta";
const url6 = "https://www.ciceksepeti.com/bez-canta?page=2";
const url7 =
  "https://www.ciceksepeti.com/arama?query=suluk%20ve%20matara&qt=suluk%20ve%20matara&OM.zn=q2q";
const url8 =
  "https://www.ciceksepeti.com/arama?query=suluk%20ve%20matara&qt=suluk%20ve%20matara&OM.zn=q2q&page=2";
const url9 = "https://www.mxZataramasu.co/collections/tum-suco-mataralar";
const url10 = "https://www.mataramasu.co/collections/tum-suco-mataralar?page=2";
const url11 = "https://www.mizunotr.com/surdurulebilir?ps=8";
const imageUrls = [];

import bottles from "./JSON/SuCo/scrapedDataSuCoBottles.json" assert { type: "json" };

const randObjlList = [];
const randNums = [];

for (let index = 0; index < 10; index++) {
  let randNum = Math.floor(Math.random() * 54);
  console.log("running");
  while (randNums.includes(randNum)) {
    randNum = Math.floor(Math.random() * 54);
  }
  randNums.push(randNum);
  randObjlList.push(bottles[randNum]);
}

const json = JSON.stringify(randObjlList);

fs.writeFile("scrapedDataSecondHorScroll.json", json, "utf8", function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});

