// const csv = require("csvtojson");
import csv from "csvtojson";
function productCsvFormatter() {
  const csvFilePath = "./Copy_of_product_template.csv";
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      console.log(jsonObj);
    });
}

productCsvFormatter();
