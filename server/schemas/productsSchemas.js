import Joi from "joi";

export const createOrderSchema = Joi.object({
  // name: Joi.string().required(),
  // email: Joi.string().required(),
  // phone: Joi.string().min(10).required(),
  // favorite: Joi.boolean().required(),
});

export const updateOrderSchema = Joi.object({
  // name: Joi.string(),
  // email: Joi.string(),
  // phone: Joi.string().min(10),
});

export const updateOrderStatusSchema = Joi.object({
  // favorite: Joi.boolean(),
});
