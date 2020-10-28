const deleteProduct = ({ productRepository }) => async (productId) => {
  try {
    const exist = await productRepository.findById(productId);
    if (!exist) {
      throw new Error("Product with this id doesn't exist");
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
