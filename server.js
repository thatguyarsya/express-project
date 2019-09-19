var express = require('express'),
app = express(),
port = process.env.PORT || 4000,
mongoose = require('mongoose'),
Task = require('./api/models/listModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/listRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
