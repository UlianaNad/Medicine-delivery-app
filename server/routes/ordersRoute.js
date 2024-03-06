import express from "express";

import isValidId from "../middlewares/isValidId.js";

const ordersRouter = express.Router();

ordersRouter.get("/", getAllOrders);

ordersRouter.get("/:id", isValidId, getOneOrder);

ordersRouter.delete("/:id", isValidId, deleteOrder);

ordersRouter.post("/", createOrder);

// ordersRouter.put("/:id", isValidId, updateOrder);

ordersRouter.patch("/:id/favorite", isValidId, updateStatusOfOrder);

export default ordersRouter;
