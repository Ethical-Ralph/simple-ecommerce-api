import createUser from "./CreateUser";
import loginUser from "./LoginUser";

const userUseCase = (userRepository) => ({
  createUserUsecase: createUser(userRepository),
  loginUserUsecase: loginUser(userRepository),
});

export default userUseCase;
