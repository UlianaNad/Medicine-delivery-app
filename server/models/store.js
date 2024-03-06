import { Schema, model } from "mongoose";

const storesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
});

const Store = model("store", storesSchema);

export default Store;
