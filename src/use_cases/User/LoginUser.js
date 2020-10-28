import userValidator from "../../validators/user";
import password from "../../module/password";
import Token from "../../module/token";

const loginUser = (userRepository) => async (userData) => {
  try {
    const data = userValidator.validateSignin(userData);

    const user = await userRepository.findByEmail(data.email);
    if (!user) {
      throw Error("User isn't registered");
    }

    if (!password.compareHash(user.password, data.password)) {
      throw Error("Invalid email or password");
    }

    const tokenData = {
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    const token = Token.genToken(tokenData);

    return {
      ...tokenData,
      token,
    };
  } catch (error) {
    throw error;
  }
};

export default loginUser;
