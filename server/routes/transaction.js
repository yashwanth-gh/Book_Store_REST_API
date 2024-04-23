import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.route("/transactions").get(async (req, res) => {
  try {
    const transactions = await Transaction.find({})
      .limit(50)
      .sort({ createdAt: -1 });
    res.status(200).json({
      succcess: true,
      data: transactions,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
