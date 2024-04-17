import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.route("/kpis").get(async (req, res) => {
  try {
    const kpis = await KPI.find({});
    res.status(200).json({
      succcess: true,
      data: kpis
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
