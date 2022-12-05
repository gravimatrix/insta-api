const express = require("express");
const router = express.Router();
const usersModel = require("../models/user");

const getUserObject = (req) => {
  let newUser = new usersModel();
  newUser.userName = req.query.userName;
  newUser.firstName = req.query.firstName;
  newUser.lastName = req.query.lastName;
  newUser.setPassword(req.query.password);
  newUser.email = req.query.email ?? null;
  newUser.dob = req.query.dob;
  newUser.phone = req.query.phone ?? null;
  newUser.gender = req.query.gender;
  newUser.photo = req.query.photo ?? null;

  return newUser;
}

router.post("/", (req, res, next) => {

  let newUser = getUserObject(req);

  // Save newUser object to database
  newUser.save((err, User) => {
    if (err) {
      console.log(err);
      return res.status(400).send({
        message: "Failed to add user.",
        success: false,
        response: err
      });
    } else {
      return res.status(201).send({
        message: "User added successfully.",
        success: true,
        response: User
      });
    }
  });
});

module.exports = router;
