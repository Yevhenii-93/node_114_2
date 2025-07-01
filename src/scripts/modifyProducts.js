import { PATH_DB } from "../constants/products.js";
import fs from "node:fs/promises";

const modifyProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);

    const newProducts = products.map(
      ({ description, ...products }) => products
    );

    console.log(newProducts);
  } catch (error) {
    console.log(error, "error");
  }
};

modifyProducts();
