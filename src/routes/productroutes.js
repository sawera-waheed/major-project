require("../db/conn");
const express = require("express");
const router = express.Router();
const Product = require("../models/productSchema");
router.get("/products", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
});
router.post("/addproduct", async (req, res) => {
  const { name, img, price, quantity } = req.body;

  if (!name || !img || !price || !quantity) {
    res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    const product = await Product.findOne({ name: name });
    if (product) {
      res.status(500).json({ message: "Product already exist" });
    } else {
      const product = new Product({ name, img, price, quantity });
      await product.save();
      res.status(200).json({ message: "Data Sent" });
    }
  } catch (err) {
    console.log(err);
  }
});
// one product
router.get("/product/:id", async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById({ _id: id });
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product does not exist" });
  }
});
// update
router.patch("/updateproduct/:id", async (req, res) => {
  const { id } = req.params;
  const Update = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (Update) {
    res.status(200).json({ message: "value updated" });
  } else {
    res.status(404).json({ error: "Value does not exist" });
  }
});
// delete
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete({ _id: id });
  if (product) {
    res.status(200).json({ message: "Deleted" });
  } else {
    res.status(404).json({ error: "Value does not exist" });
  }
});
module.exports = router;
