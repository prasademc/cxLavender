const exporess = require("express");
const mongoose = require("mongoose");
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

router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.updateOne(
      { _id: req.params.id },
      {
        $set: {
          fname: req.body.fname,
          lname: req.body.lname,
          age: req.body.age,
          email: req.body.email,
          company: req.body.company,
        },
      }
    );
    res.json(updatedEmployee);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removeEmployee = await Employee.remove({ _id: req.params.id });
    res.json(removeEmployee);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
