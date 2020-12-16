const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let filter = new Schema(
  {
    location: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    }
  },
  { collection: "filter" }
);

module.exports = mongoose.model("Filter", filter);
