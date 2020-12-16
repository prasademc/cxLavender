const exporess = require("express");
const mongoose = require("mongoose");
const router = exporess.Router();

require("../models/Company.js");

const Company = mongoose.model("Company");

/**
 * @description Get all companies
 */
router.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
