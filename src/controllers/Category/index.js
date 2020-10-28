import categoryController from "./categoryController";
import categoryUseCase from "../../use_cases/Category";

module.exports = ({ categoryRepository }) => {
  const useCases = categoryUseCase({ categoryRepository });

  const controllers = categoryController({
    ...useCases,
  });
  return controllers;
};
