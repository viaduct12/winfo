const express = require("express");
const router = express.Router();

const db = require("../../models");

router.post("/signup", (req, res, next) => {
  console.log(req.body, "inside sign up");
  const newFurniture = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    furniture: req.body.furniture,
    picture: req.body.picture,
    location: req.body.location
  };

  db.Donation.create(newFurniture).then(data => {
    return res.json(result);
  }).catch(err => {
    if (err) {
      console.log(err);
      return res.json({ error: err.message });
    }
  })

});

module.exports = router;
