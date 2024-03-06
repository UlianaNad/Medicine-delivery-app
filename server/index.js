import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config.js";
import productsRouter from "./routes/productRoute.js";
import storesRouter from "./routes/storesRoute.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/pharmacy", productsRouter);
app.use("/api/stores", storesRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const { DB_HOST, PORT = 4000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Database connection successful. Server is running. Use our API on port: ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("db", error.message);
    process.exit(1);
  });
