import CustomError from "../../module/error";
import isValidId from "../../module/isValidId";

module.exports = (Model) => {
  const add = async (data) => {
    const newData = new Model(data);
    await newData.save();
    return newData;
  };

  const update = (data) => {
    try {
      const id = data.id;
      if (!isValidId(id)) {
        throw CustomError.ValidationError("Invalid Id");
      }
      return Model.findByIdAndUpdate(id, {
        ...data,
      }).exec();
    } catch (error) {
      throw error;
    }
  };

  const remove = (id) => {
    try {
      if (!isValidId(id)) {
        throw CustomError.ValidationError("Invalid Id");
      }
      return Model.findByIdAndRemove(id).exec();
    } catch (error) {
      throw error;
    }
  };

  const getProducts = ({ limit, page }, categories_) => {
    const query = categories_
      ? { categories: { $in: categories_.split(",") } }
      : {};
    return Model.find(query)
      .limit(Number(limit))
      .skip(Number((page - 1) * limit))
      .exec();
  };

  const findById = (id) => {
    try {
      if (!isValidId(id)) {
        throw CustomError.ValidationError("Invalid Id");
      }
      return Model.findById(id).exec();
    } catch (error) {
      throw error;
    }
  };

  const findBy = (query) => {
    return Model.findOne(query).exec();
  };

  const findByEmail = (email) => {
    return Model.findOne({ email }).exec();
  };

  const verifyCategories = async (categories) => {
    try {
      for (let i = 0; i < categories.length; i++) {
        const categoryExist = await findBy({
          categoryName: categories[i],
        });
        if (!categoryExist) {
          throw CustomError.NotFoundError(
            `Category ${categories[i]} doesn't exist`
          );
        }
      }
    } catch (error) {
      throw error;
    }
  };

  const all = () => {
    return Model.find().exec();
  };

  const removeall = () => {
    return Model.deleteMany({}).exec();
  };

  const countProduct = (categories_) => {
    const query = categories_
      ? { categories: { $in: categories_.split(",") } }
      : {};
    return Model.countDocuments(query);
  };

  return {
    add,
    update,
    remove,
    findById,
    findByEmail,
    all,
    removeall,
    findBy,
    getProducts,
    verifyCategories,
    countProduct,
  };
};
