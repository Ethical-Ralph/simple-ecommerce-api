import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cateogorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const categoryModel = mongoose.model("Category", cateogorySchema);

module.exports = categoryModel;
