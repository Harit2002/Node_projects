const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(
  process.env.database
);

module.exports = {
  connection
};
