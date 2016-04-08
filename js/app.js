
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://www.mattkeenan.me');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/summer2016', function (req, res) {
  res.send('You sent the data: "' + req.body + '"');
  var mysql = require('mysql');

console.log("listening on port 8080");

//Create database connection credentials
  var connection = mysql.createConnection({
    host : "10.0.0.32",
    user : "webInput",
    password: "webConnection22",
    database: 'webData'
  });

  connection.connect();
  var songInput = req.query.songData;
  //var songInput = JSON.stringify(req.body);
  console.log(req.body);
  console.log(songInput);
  var theDate = new Date();
  connection.query('INSERT INTO playlist (songInfo) VALUES (?)', [songInput], function(err, results){

    if(err){
      console.log(err);
      console.log("Looks like there was an error");
      return ;
    }
    console.log("Succesful database entry at: " + theDate);
  });

  //connection.end();
  //res.redirect('http://www.mattkeenanm.me/summer2016');
}).listen(8080);

//69.249.191.128

//Create javascript object that is equal to the JSON
//Set variable equal to JSON object at KEY
