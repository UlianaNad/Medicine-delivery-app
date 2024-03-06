import Store from "../models/store.js";

export const listOfStores = async () => Store.find();
