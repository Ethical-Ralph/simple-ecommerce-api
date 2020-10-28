const getProducts = ({ productRepository }) => async (meta, categories) => {
  try {
    const products = await productRepository.getProducts(meta, categories);

    const count = await productRepository.countProduct(categories);

    return {
      message: "Products fetched successfully",
      data: {
        products,
        metaData: {
          currentPage: Number(meta.page),
          limit: Number(meta.limit),
          totalDocuments: count,
          totalPages: Math.ceil(count / meta.limit),
        },
      },
    };
  } catch (error) {
    throw error;
  }
};

export default getProducts;
