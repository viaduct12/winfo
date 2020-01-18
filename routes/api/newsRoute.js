const express = require("express");
const router = express.Router();

const db = require("../../models");

router.post("/newsletter", (req, res, next) => {
  console.log(req.body, "inside sign up");
  const userLetter = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  db.Newsletter.create(userLetter).then(data => {
    return res.json(result);
  }).catch(err => {
    if (err) {
      console.log(err);
      return res.json({ error: err.message });
    }
  })

});

module.exports = router;
