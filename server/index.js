const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middlewares
app.use(cors());
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

app.listen(4300, () => {
  console.log("HTTP REST API Server running at http://localhost:4300");
});
