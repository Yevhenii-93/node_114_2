import fs from "node:fs/promises";
import { PATH_DB } from "../constants/products.js";

export const getUniqueCategories = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const productName = products.map((product) => product.name);
    console.log(productName);
  } catch (error) {
    console.log(error, "error");
  }
};

getUniqueCategories();
