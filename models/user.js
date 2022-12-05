const mongoose = require("mongoose");
var crypto = require("crypto");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: false,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    isVerified: Boolean,
    email: String,
    phone: String,
    dob: {
      type: Date,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    photo: String,
  },
  { timestamps: true }
);

userSchema.methods.setPassword = function (code) {
  this.salt = crypto.randomBytes(16).toString("hex");

  this.password = crypto
    .pbkdf2Sync(code, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
};

userSchema.methods.validPassword = function (code) {
  let password = crypto
    .pbkdf2Sync(code, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return this.password === password;
};

const User = mongoose.model("User", userSchema);

module.exports = User;