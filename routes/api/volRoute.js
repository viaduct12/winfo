const express = require("express");
const router = express.Router();

const db = require("../../models");

router.post("/signup", (req, res, next) => {
  // console.log(req.body, "inside sign up");
  const newVolunteer = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone
  };

  db.Volunteer.create(newVolunteer).then(data => {
    return res.json(result);
  }).catch(err => {
    if (err) {
      console.log(err);
      return res.json({ error: err.message });
    }
  })

});

//test route to see all users 
router.get("/users", (req, res) => {
  db.User.findAll({}).then(result => {
    res.json(result)
  })
})
module.exports = router;
