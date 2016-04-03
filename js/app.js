
var express = require('../node_modules/express/index.js');
var app = express();

app.post('/', function (req, res) {
  var mysql = require('mysql');


  var connection = mysql.createConnection({
    host : "10.0.0.32",
    user : "webInput",
    password: "webConnection22",
    database: 'webData'
  });

  connection.connect();
  var songInput;
  connection.query('INSERT INTO playlist (songInfo) VALUES (?)', [songInput], function(err, results){
    if(err){
      console.log(err);
      console.log("Looks like there was an error");
      return ;
    }
    console.log(results);
  });

  connection.end();
  res.redirect('www.mattkeenan.me/summer2016');
});
