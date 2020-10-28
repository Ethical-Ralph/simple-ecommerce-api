import CustomError from "../../module/error";

const deleteProduct = ({ productRepository }) => async (productId) => {
  try {
    const exist = await productRepository.findById(productId);
    if (!exist) {
      throw CustomError.NotFoundError("Product with this id doesn't exist");
    }

    await productRepository.remove(productId);

    return {
      message: "Product deleted successfully",
    };
  } catch (error) {
    throw error;
  }
};

export default deleteProduct;
