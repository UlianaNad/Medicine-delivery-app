import express from "express";

import isValidId from "../middlewares/isValidId.js";
import { getAllStores } from "../controllers/storeController.js";

const storesRouter = express.Router();

storesRouter.get("/", getAllStores);

//storesRouter.get("/:id", isValidId, getOneStore);

export default storesRouter;
