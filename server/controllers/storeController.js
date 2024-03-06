import { listOfStores } from "../services/storeServices.js";

export const getAllStores = async (req, res, next) => {
  try {
    const result = await listOfStores();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
