
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/summer2016', function (req, res) {
  res.send('You sent the data ' + req.query.songData);
  var mysql = require('mysql');

console.log("listening on port 8080");

  var connection = mysql.createConnection({
    host : "10.0.0.32",
    user : "webInput",
    password: "webConnection22",
    database: 'webData'
  });

  connection.connect();
  var songInput = req.query.songData;
  var theDate = new Date();
  connection.query('INSERT INTO playlist (songInfo) VALUES (?)', [songInput], function(err, results){

    if(err){
      console.log(err);
      console.log("Looks like there was an error");
      return ;
    }
    console.log("Succesful database entry at" + theDate);
  });

  //connection.end();
  //res.redirect('http://www.mattkeenanm.me/summer2016');
}).listen(8080);
