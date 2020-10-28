const getProducts = ({ productRepository }) => async (meta) => {
  try {
    const products = await productRepository.getProducts(meta);

    const count = await productRepository.count();

    return {
      message: "Products fetched successfully",
      data: {
        products,
        metaData: {
          currentPage: Number(meta.page),
          limit: Number(meta.limit),
          totalPages: Math.ceil(count / meta.limit),
        },
      },
    };
  } catch (error) {
    throw error;
  }
};

export default getProducts;
