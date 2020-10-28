import productValidator from "../../validators/product";

const updateProduct = ({ productRepository, categoryRepository }) => async ({
  productData,
  productId,
}) => {
  try {
    const data = productValidator.validateUpdate(productData);

    const exist = await productRepository.findById(productId);
    if (!exist) {
      console.log(exist, productId);
      throw new Error("Product with this id doesn't exist");
    }

    let categories = productData.categories;
    await categoryRepository.verifyCategories(categories);

    data.id = productId;
    const product = await productRepository.update(data);

    return {
      message: "Product updated successfully",
      product,
    };
  } catch (error) {
    throw error;
  }
};

export default updateProduct;
