import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.route("/products").get(async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({
      succcess: true,
      data: product
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
