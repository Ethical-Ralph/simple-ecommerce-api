import productValidator from "../../validators/product";

const createProduct = ({ productRepository, categoryRepository }) => async (
  productData
) => {
  try {
    const data = productValidator.validateCreate(productData);

    let categories = productData.categories;

    await categoryRepository.verifyCategories(categories);

    const product = await productRepository.add(data);

    return {
      message: "Product added successfully",
      data: product,
    };
  } catch (error) {
    throw error;
  }
};

export default createProduct;
