const router = require("express").Router();
const volunteerRoute = require('./volRoute');
const imageRoute = require('./images');
const newsRoute = require('./newsRoute');
const dropoffRoute = require('./dropOff');

router.use("/volunteer", volunteerRoute);
router.use("/image", imageRoute);
router.use("/letter", newsRoute);
router.use("/drop", dropoffRoute);

module.exports = router;
