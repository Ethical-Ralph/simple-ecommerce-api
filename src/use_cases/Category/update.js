import categoryValidator from "../../validators/category";

const updateCategory = ({ categoryRepository }) => async ({
  categoryData,
  categoryId,
}) => {
  try {
    const data = categoryValidator.validateUpdate(categoryData);

    const exist = await categoryRepository.findById(categoryId);
    if (!exist) {
      throw new Error("Category with this id doesn't exist");
    }

    data.id = categoryId;
    const category = await categoryRepository.update(data);

    return {
      message: "category updated successfully",
      data: category,
    };
  } catch (error) {
    throw error;
  }
};

export default updateCategory;
