import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    categories: [{ type: String, required: true }],
  },
  {
    versionKey: false,
  }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
