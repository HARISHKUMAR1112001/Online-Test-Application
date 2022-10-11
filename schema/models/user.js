const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  UserName: {
    type: String,
    require: true,
    trim: true
  },
  Email: {
    type: String,
    unique: true,
    require: true,
    trim: true
  },
  Password: {
    type: String,
    require: true
  }
}, {timestamps: true});

const UserDetails = mongoose.model("UserDetails", UserSchema);

module.exports = UserDetails;