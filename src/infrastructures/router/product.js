import { Router } from "express";
import isAdmin from "./middleware/isAdmin";
import controller from "../../controllers/Products";

const productRouter = ({ productRepository, categoryRepository }) => {
  const {
    createProductController,
    getProductController,
    getAllProductController,
    updateProductController,
    deleteProductController,
  } = controller({
    productRepository,
    categoryRepository,
  });
  const router = Router();

  router
    .route("/")
    .get(getAllProductController)
    .post(isAdmin, createProductController);

  router
    .route("/:productId")
    .get(getProductController)
    .patch(isAdmin, updateProductController)
    .delete(isAdmin, deleteProductController);

  return router;
};

module.exports = productRouter;
