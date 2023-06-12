const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});

const UserModel = mongoose.model('user', userScheme)

module.exports=UserModel