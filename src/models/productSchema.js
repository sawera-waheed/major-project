require("../db/conn");
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
     name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const Product = new mongoose.model("Product", ProductSchema);
module.exports = Product;
