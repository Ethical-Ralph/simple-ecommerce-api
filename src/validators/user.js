import Joi from "joi";
import validate from "./validate";

class userValidator {
  static validateSignup(data) {
    const schema = Joi.object().keys({
      lastName: Joi.string().required(),
      firstName: Joi.string().required(),
      email: Joi.string().email(),
      password: Joi.string().required(),
      role: Joi.string().optional(),
    });
    return validate(schema, data);
  }

  static validateSignin(data) {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    return validate(schema, data);
  }
}

export default userValidator;
