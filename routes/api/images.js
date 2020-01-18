const express = require("express");
const router = express.Router();

router.post('/image-upload', (req, res) => {

  console.log("Received image!");
  const values = Object.values(req.files);
  const promises = values.map(image => cloudinary.uploader.upload(image.path));

  Promise
    .all(promises)
    .then(results => res.json(results));
});
module.exports = router;
