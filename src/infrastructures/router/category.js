import { Router } from "express";
import controller from "../../controllers/Category";
import isAdmin from "./middleware/isAdmin";

const categoryRouter = ({ categoryRepository }) => {
  const {
    createCategoryController,
    getAllCategoryController,
    updateCategoryController,
    deleteCategoryController,
  } = controller({
    categoryRepository,
  });
  const router = Router();

  router
    .route("/")
    .get(getAllCategoryController)
    .post(isAdmin, createCategoryController);

  router
    .route("/:categoryId")
    .patch(isAdmin, updateCategoryController)
    .delete(isAdmin, deleteCategoryController);
  return router;
};

module.exports = categoryRouter;
