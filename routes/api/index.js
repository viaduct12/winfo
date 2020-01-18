const router = require("express").Router();
const volunteerRoute = require('./volRoute');

router.use("/volunteer", volunteerRoute);
module.exports = router;
