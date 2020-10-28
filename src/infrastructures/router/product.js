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

  router.route("/").get(getAllProductController).post(createProductController);

  router
    .route("/:productId")
    .get(getProductController)
    .patch(updateProductController)
    .delete(deleteProductController);

  return router;
};

module.exports = productRouter;
