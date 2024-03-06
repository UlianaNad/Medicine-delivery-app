import express from "express";
import { getAllProducts } from "../controllers/productController.js";

import isValidId from "../middlewares/isValidId.js";

const productsRouter = express.Router();

productsRouter.get("/products", getAllProducts);

//productsRouter.get("/:id", isValidId, getOneProduct);

//productsRouter.patch("/:id/favorite", isValidId, updateStatusOfProduct);

export default productsRouter;
