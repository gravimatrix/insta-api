const express = require("express");
const router = express.Router();
const usersModel = require("../models/user");

router.post("/", (req, res, next) => {
  let oldUserName = req.query.oldUserName;
  let newUserName = req.query.newUserName;
  usersModel.findOneAndUpdate(
    { userName: oldUserName },
    { userName: newUserName },
    null,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.status(400).send({
          message: "Failed to add user.",
          success: false,
          response: err,
        });
      } else {
        return res.status(201).send({
          message: "User added successfully.",
          success: true,
          response: user,
        });
      }
    }
  );
});

module.exports = router;
