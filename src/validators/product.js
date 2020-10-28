import Joi from "joi";
import validate from "./validate";

class productValidator {
  static validateCreate(data) {
    const schema = Joi.object().keys({
      productName: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
      categories: Joi.array().min(1).max(10).required(),
    });
    return validate(schema, data);
  }

  static validateUpdate(data) {
    const schema = Joi.object().keys({
      productName: Joi.string().optional(),
      price: Joi.number().optional(),
      description: Joi.string().optional(),
      categories: Joi.array().min(1).max(10).optional(),
    });
    return validate(schema, data);
  }
}

export default productValidator;
