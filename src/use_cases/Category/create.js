import categoryValidator from "../../validators/category";
import CustomError from "../../module/error";

const createCategory = ({ categoryRepository }) => async (categoryData) => {
  try {
    const data = categoryValidator.validateCreate(categoryData);

    const exist = await categoryRepository.findBy({
      categoryName: categoryData.categoryName,
    });

    if (exist) {
      throw CustomError.ConflictError(
        "A category with this name already exists"
      );
    }

    const category = await categoryRepository.add(data);
    return {
      message: "Category added successfully",
      data: category,
    };
  } catch (error) {
    throw error;
  }
};

export default createCategory;
