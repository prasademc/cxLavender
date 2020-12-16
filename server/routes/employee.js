const exporess = require("express");
const mongoose = require("mongoose");
const router = exporess.Router();
const { Parser } = require("json2csv");

require("../models/Employee.js");
const Employee = mongoose.model("Employee");

require("../models/Filter.js");
const Filter = mongoose.model("Filter");

/**
 * @description Get all Employeed
 */
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.json({ message: error });
  }
});

/**
 * @description Get Employee by it's id
 */
router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.json({ message: error });
  }
});

/**
 * @description Employee create router
 */
router.post("/", async (req, res) => {
  const employee = new Employee({
    fname: req.body.fname,
    lname: req.body.lname,
    age: req.body.age,
    email: req.body.email,
    company: req.body.company,
  });

  try {
    const saveEmployee = await employee.save();
    res.json(saveEmployee);
  } catch (error) {
    res.json({ message: error });
  }
});

/**
 * @description filterd Employees router
 */
router.post("/search", async (req, res) => {
  const filter = new Filter({
    location: req.body.location,
    size: req.body.size,
  });

  try {
    const employees = await Employee.find();
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.company.location === filter.location ||
        employee.company.size === filter.size
    );
    res.json(filteredEmployees);
  } catch (error) {
    res.json({ message: error });
  }
});

/**
 * @description CSV out filterd Employees router
 */
router.post("/csv", async (req, res) => {
  const filter = new Filter({
    location: req.body.location,
    size: req.body.size,
  });

  try {
    const employees = await Employee.find();
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.company.location === filter.location ||
        employee.company.size === filter.size
    );

    const parser = new Parser();
    const csv = parser.parse(res.json(filteredEmployees));
    res.body(csv);
  } catch (error) {
    res.json({ message: error });
  }
});

/**
 * @description Employee update router
 */
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

/**
 * @description Employee delete router
 */
router.delete("/:id", async (req, res) => {
  try {
    const removeEmployee = await Employee.remove({ _id: req.params.id });
    res.json(removeEmployee);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
