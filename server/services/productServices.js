import Product from "../models/products.js";

export const listOfProducts = async () => Product.find();
