const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let employee = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
  },
  { collection: "employee" }
);

module.exports = mongoose.model("Employee", employee);
