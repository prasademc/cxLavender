const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import routes
const companyRoute = require("./routes/company");
const employeeRoute = require("./routes/employee");

app.use("/api/companies", companyRoute);
app.use("/api/employees", employeeRoute);

mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(4300, () => {
  console.log("HTTP REST API Server running at http://localhost:4300");
});
