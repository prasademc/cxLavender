const exporess = require("express");
const mongoose = require('mongoose');
const router = exporess.Router();

require("../models/Employee.js");
const Employee = mongoose.model("Employee");

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
