import userController from "./userController";
import userUseCase from "../../use_cases/User";

module.exports = (userRepository) => {
  const useCases = userUseCase(userRepository);

  const controllers = userController({
    ...useCases,
  });
  return controllers;
};
