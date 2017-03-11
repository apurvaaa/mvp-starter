var express = require('express');
var bodyParser = require('body-parser');
var populate = require('./populate.js');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var cards = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

//app.use();

app.get('/items', function (req, res) {

  cards.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
  populate.fetchData(function(JSONData) {
  	console.log('inside callback of fetch data', JSONData[0]);
    cards.initializeDb(JSONData);
  });
  //console.log('fetched data : ', populate.fetchedData);
  
});

