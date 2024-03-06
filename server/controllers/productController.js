import { listOfProducts } from "../services/productServices.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const result = await listOfProducts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
