
var express = require(express);
var app = express();
var mysql = require('mysql');

app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

var connection = mysql.createConnection({
  host : "10.0.0.32",
  user : "webInput",
  password: "webConnection22",
  database: 'webData'
});

    connection.connect();
    var songInput;
    connection.query('INSERT INTO playlist (songInfo) VALUES (?)', [songInput], function(err, results, fields){
      if(err){
        console.log(err);
        return fields;
      }
      console.log(results);
    });

    connection.end();
