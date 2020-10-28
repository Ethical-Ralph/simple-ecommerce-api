import CustomError from "../../module/error";

const getProduct = ({ productRepository }) => async (id) => {
  try {
    const product = await productRepository.findById(id);

    if (!product) {
      throw CustomError.NotFoundError("Product not found");
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
