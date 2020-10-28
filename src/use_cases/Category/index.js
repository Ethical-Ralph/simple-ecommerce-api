import createCategory from "./create";
import updateCategory from "./update";
import getAllCategory from "./getAll";
import deleteCategory from "./delete";

const categoryUsecase = ({ categoryRepository }) => ({
  createCategoryUsecase: createCategory({
    categoryRepository,
  }),
  getAllCategoryUsecase: getAllCategory({ categoryRepository }),
  deleteCategoryUsecase: deleteCategory({ categoryRepository }),
  updateCategoryUsecase: updateCategory({ categoryRepository }),
});

export default categoryUsecase;
