const getCategories = ({ categoryRepository }) => async () => {
  try {
    const categories = await categoryRepository.all();

    return {
      message: "Categories fetched successfully",
      data: categories,
    };
  } catch (error) {
    throw error;
  }
};

export default getCategories;
