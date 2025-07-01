import fs from "node:fs/promises";
import { PATH_DB } from "../constants/products.js";

const getProductsByMinPrice = async (price) => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);

    const minPriceProducts = products.filter(
      (product) => product.price >= price
    );

    return minPriceProducts;
  } catch (error) {
    console.log("Error");
  }
};

console.log(await getProductsByMinPrice(600));
