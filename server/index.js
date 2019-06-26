var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var axios = require('axios');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');
// var items = require('../database-mongo');
var getTreeData = require('../utils/api.js');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(morgan('dev'));
app.use(bodyParser.json());

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

//Express HTTP
app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(data);
    }
  });
});

app.post('/items', function(req, res) {
  getTreeData(function(err, data) {
    if (err) {
      console.error('Error: ' + err);
    } else {
      items.saveAll(data, function(err) {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      })
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});