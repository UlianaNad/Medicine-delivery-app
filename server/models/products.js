import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  drugstore_id: {
    type: Schema.Types.ObjectId,
    ref: "pharmacies",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  expiration_date: {
    type: String,
    required: true,
  },
});

// productsSchema.post("save", handleSaveError);

// productsSchema.pre("findOneAndUpdate", setUpdateSettings);

// productsSchema.post("findOneAndUpdate", handleSaveError);

const Product = model("product", productsSchema);

export default Product;
