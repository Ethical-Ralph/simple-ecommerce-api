import Joi from "joi";
import validate from "./validate";

class categoryValidator {
  static validateCreate(data) {
    const schema = Joi.object().keys({
      categoryName: Joi.string().required(),
    });
    return validate(schema, data);
  }

  static validateUpdate(data) {
    const schema = Joi.object().keys({
      categoryName: Joi.string().optional(),
    });
    return validate(schema, data);
  }
}

export default categoryValidator;
