import productController from "./productController";
import productUseCase from "../../use_cases/Product";

module.exports = ({ productRepository, categoryRepository }) => {
  const useCases = productUseCase({ productRepository, categoryRepository });

  const controllers = productController({
    ...useCases,
  });
  return controllers;
};
