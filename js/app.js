
var express = require('../node_modules/express/index.js');
var app = express();
var http = require('http');

app.get('/', function (req, res) {
  var mysql = require('mysql');
  res.redirect('index.html');

  var connection = mysql.createConnection({
    host : "10.0.0.32",
    user : "webInput",
    password: "webConnection22",
    database: 'webData'
  });

  connection.connect();
  var songInput = "test song";
  connection.query('INSERT INTO playlist (songInfo) VALUES (?)', [songInput], function(err, results){
    if(err){
      console.log(err);
      console.log("Looks like there was an error");
      return ;
    }
    console.log("listening on port 1000");
  });

  //connection.end();
}).listen(1000);
