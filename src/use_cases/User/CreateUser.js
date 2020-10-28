import userValidator from "../../validators/user";
import passwordModule from "../../module/password";
import tokenModule from "../../module/token";
import CustomError from "../../module/error";

const createUser = (userRepository) => async (userData) => {
  try {
    const data = userValidator.validateSignup(userData);

    const exist = await userRepository.findByEmail(data.email);
    if (exist) {
      throw CustomError.ConflictError("A user is registered with this email");
    }
    const userPassword = data.password;
    data.password = passwordModule.hashPassword(userPassword);

    const user = await userRepository.add(data);

    const tokenData = {
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    const token = tokenModule.genToken(tokenData);

    return {
      ...tokenData,
      token,
    };
  } catch (error) {
    throw error;
  }
};

export default createUser;
