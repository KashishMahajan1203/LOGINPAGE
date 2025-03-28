const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
