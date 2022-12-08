import csv from "csvtojson";

function productCsvToJsonFormatter() {
  const csvFilePath = "./Copy_of_product_template.csv";
  csv()
    .fromFile(csvFilePath)
    .then((products) => {
      const length = products.length;
      let p = [];
      for (let i = 0; i < length; i++) {
        let currentProd = products[i];
        if (currentProd?.id) {
          const newp = newProductFormatter(currentProd, products[0], null);
          p.push(newp);
        } else {
          const newpr = newProductFormatter(
            currentProd,
            products[0],
            p[p.length - 1]
          );
          p.splice(p.length - 1, 1, newpr);
        }
      }

      // console.log({ p });
      console.log(JSON.stringify(p));
    });
}
productCsvToJsonFormatter();

function newProductFormatter(product, withCols, parent = null) {
  let prod = parent || {
    Title: "",
    Description: "",
    "Product category": 0,
    tags: [],
    MRP: null,
    "Discounted price": false,
    Quantity: null,
    categories: [],
    Width: null,
    height: "",
    depth: "",
    Weight: 0,
    HSN: false,
    "GST%": "",
    options: [],
    media: [],
    variants: [],
    status: "in-stock",
  };
  if (!parent) {
    for (let key in withCols) {
      if (key.includes("option")) {
        if (key.length < 10) {
          const optionCount = key.split("").splice(6, key.length - 6);
          prod.options?.push({
            option: product[key],
            values: [product["option value" + optionCount]],
            accepted: true,
          });
        }
      } else prod[key] = prod[key] || product[key];
    }
  } else {
    for (let key in product) {
      if (key.includes("option")) {
        if (key.length < 10) {
          const optionCount = key.split("").splice(6, key.length - 6);
          const ll = parent.options?.reduce((op, cur) => {
            if (
              cur?.option === withCols[key] &&
              !cur?.values.includes(product["option value" + optionCount])
            ) {
              cur?.values.push(product["option value" + optionCount]);
              return cur;
            } else {
              return cur;
            }
          }, []);
        }
      } else prod[key] = prod[key] || product[key];
    }
  }
  return prod;
}

// const data = cartesian(
//   [
//     {
//       option: "color",
//       values: ["red", "white", "green"],
//       accepted: true,
//     },
//     { option: "size", values: ["xl", "xxl", "l"], accepted: true },
//     {
//       option: "type",
//       values: ["round neck", "v neck"],
//       accepted: true,
//     },
//     {
//       option: "material",
//       values: ["cotton", "wool", "polythine"],
//       accepted: true,
//     },
//   ]?.map((item) => item.values.map((_item) => item.option + ":" + _item))
// );
// console.log(data);

function cartesian(...args) {
  const r = [],
    max = args.length - 1;
  function helper(arr, i) {
    for (let j = 0, l = args[i].length; j < l; j++) {
      const a = arr.slice(0); // clone arr
      a.push(args[i][j]);
      if (i == max) r.push(a);
      else helper(a, i + 1);
    }
  }
  helper([], 0);
  return r;
}
