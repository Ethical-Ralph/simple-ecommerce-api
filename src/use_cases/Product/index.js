import createProduct_ from "./create";
import getAll_ from "./getAll";
import get_ from "./get";
import updateProduct_ from "./update";
import deleteProduct_ from "./delete";

const productUsecase = ({ productRepository, categoryRepository }) => ({
  createProductUsecase: createProduct_({
    productRepository,
    categoryRepository,
  }),
  getAllProductUsecase: getAll_({ productRepository }),
  getProductUsecase: get_({ productRepository }),
  deleteProductUsecase: deleteProduct_({ productRepository }),
  updateProductUsecase: updateProduct_({
    productRepository,
    categoryRepository,
  }),
});

export default productUsecase;
