const getProduct = ({ productRepository }) => async (id) => {
  try {
    const product = await productRepository.findById(id);

    if (!product) {
      throw new Error("Product not found");
    }

    return {
      message: "Product fetched successfully",
      data: product,
    };
  } catch (error) {
    throw error;
  }
};

export default getProduct;
