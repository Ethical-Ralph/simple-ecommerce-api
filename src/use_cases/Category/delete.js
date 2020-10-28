const deleteCategory = ({ categoryRepository }) => async (categoryId) => {
  try {
    const exist = await categoryRepository.findById(categoryId);
    if (!exist) {
      throw new Error("Category with this id doesn't exist");
    }

    await categoryRepository.remove(categoryId);

    return {
      message: "Category deleted successfully",
    };
  } catch (error) {
    throw error;
  }
};

export default deleteCategory;
