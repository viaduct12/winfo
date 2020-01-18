require('dotenv').config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const cloudinary = require('cloudinary');
const app = express();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
})

const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('*', (req, res, next) => {
  console.log(req);
  next();
})
app.use(cors({origin:true}));
// const corsOptions ={
//   origin: "https://viaduct12.github.io/project-3/",
//   optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions));
// app.use(cors());
app.use(routes);
app.use(express.static("public"));

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

