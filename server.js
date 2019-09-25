require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");
// Task = require('./api/models/listModel'), //created model loading here
const bodyParser = require("body-parser");

const priorityRoutes = require("./api/routes/priorityRoutes"); //importing route
const routes = require("./api/routes/listRoutes");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb+srv://Bob:bobby@cluster0-rsb5p.mongodb.net/Tododb?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log(`connected to database`);
  })
  .catch(error => {
    console.error(error);
  });
// const db = require("./config/db")

// const objectId = require("mongodb").ObjectID;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// console.log(process.env)

//mongoose instance connection url connection
//mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res, next) => res.send("HELLO!"));
routes(app); //register the route
priorityRoutes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});
// db.connect(()=>{
//   app.listen(port, () => console.log(`port on ${port}!`));
// });

app.listen(port, () => {
  console.log("list RESTful API server started on: " + port);
});
