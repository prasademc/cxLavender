const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let company = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { collection: "company" }
);

module.exports = mongoose.model("Company", company);
