import error from "../../module/error";

module.exports = (Model) => {
  const add = async (data) => {
    const newData = new Model(data);
    await newData.save();
    return newData;
  };

  const update = (data) => {
    return Model.findByIdAndUpdate(data.id, {
      ...data,
    }).exec();
  };

  const remove = (id) => {
    return Model.findByIdAndRemove(id).exec();
  };

  const getProducts = ({ limit, page }) => {
    return Model.find()
      .limit(Number(limit))
      .skip(Number((page - 1) * limit))
      .exec();
  };

  const findById = (id) => {
    return Model.findById(id).exec();
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
          throw error.NotFoundError(`Category ${categories[i]} doesn't exist`);
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

  const count = () => {
    return Model.countDocuments();
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
    count,
  };
};
