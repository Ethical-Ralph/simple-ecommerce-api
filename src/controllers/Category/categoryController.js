import response from "../../module/response";

const categoryContoller = ({
  createCategoryUsecase,
  getAllCategoryUsecase,
  updateCategoryUsecase,
  deleteCategoryUsecase,
}) => ({
  createCategoryController: async (req, res, next) => {
    try {
      const categoryData = req.body;

      const category = await createCategoryUsecase(categoryData);
      return response.success(res, category, 200);
    } catch (error) {
      next(error);
    }
  },

  getAllCategoryController: async (req, res, next) => {
    try {
      const categories = await getAllCategoryUsecase();
      return response.success(res, categories, 200);
    } catch (error) {
      next(error);
    }
  },

  updateCategoryController: async (req, res, next) => {
    try {
      const categoryData = req.body;
      const { categoryId } = req.params;

      const category = await updateCategoryUsecase({
        categoryData,
        categoryId,
      });
      return response.success(res, category, 200);
    } catch (error) {
      next(error);
    }
  },
  deleteCategoryController: async (req, res, next) => {
    try {
      const { categoryId } = req.params;

      const category = await deleteCategoryUsecase(categoryId);
      return response.success(res, category, 200);
    } catch (error) {
      next(error);
    }
  },
});

export default categoryContoller;
