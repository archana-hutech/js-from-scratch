import csv from "csvtojson";
function productCsvToJsonFormatter() {
  const csvFilePath = "./Copy_of_product_template.csv";
  csv()
    .fromFile(csvFilePath)
    .then((products) => {
      let p = [];
      products.forEach((product, i, allProducts) => {
        if (i === 0) {
          p.push(product);
        } else {
          for (let key in product) {
            if (!product[key] && product[i - 1]?.id != p[i - 1]?.id) {
              product[key] = allProducts[i - 1]?.[key];
            }
          }
          p.push(product);
        }
      });
      console.log(p);
    });
}

productCsvToJsonFormatter();
