import response from "../../module/response";

const productContoller = ({
  createProductUsecase,
  getAllProductUsecase,
  getProductUsecase,
  updateProductUsecase,
  deleteProductUsecase,
}) => ({
  createProductController: async (req, res, next) => {
    try {
      const productData = req.body;

      const product = await createProductUsecase(productData);
      return response.success(res, product, 200);
    } catch (error) {
      next(error);
    }
  },
  getProductController: async (req, res, next) => {
    try {
      const { productId } = req.params;

      const product = await getProductUsecase(productId);
      return response.success(res, product, 200);
    } catch (error) {
      next(error);
    }
  },
  getAllProductController: async (req, res, next) => {
    try {
      const { page = 1, limit = 10 } = req.query;

      const product = await getAllProductUsecase({
        page,
        limit,
      });
      return response.success(res, product, 200);
    } catch (error) {
      next(error);
    }
  },

  updateProductController: async (req, res, next) => {
    try {
      const productData = req.body;
      const { productId } = req.params;

      const product = await updateProductUsecase({ productData, productId });
      return response.success(res, product, 200);
    } catch (error) {
      next(error);
    }
  },
  deleteProductController: async (req, res, next) => {
    try {
      const { productId } = req.params;

      const product = await deleteProductUsecase(productId);
      return response.success(res, product, 200);
    } catch (error) {
      next(error);
    }
  },
});

export default productContoller;
