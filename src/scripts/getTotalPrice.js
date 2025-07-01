import { PATH_DB } from "../constants/products.js";
import fs from "node:fs/promises";

const getTotalPrice = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const products = JSON.parse(data);

    const totalPrice = products.reduce((total, product) => {
      const sum = total + Number(product.price);
      return sum;
    }, 0);

    console.log(totalPrice);
  } catch (error) {
    console.log("Error");
  }
};

getTotalPrice();
