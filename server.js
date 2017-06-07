var url  = require("url");
var querystring = require("querystring");
var express = require("express");
var app = express();
var ejs = require("ejs");
app.set('view engine', 'ejs');

//POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // this is used for parsing the JSON object from POST

//Permet de spécifier que tout ce qu'on dépose dans ce répertoire public sera automatiquement accessible
//On peut l'appeler comme on veut, pas que public
app.use(express.static("public"));


app.get('/', function (req, res) {
  res.render('home');
});

app.listen(80, function () {
  console.log("Server listening on port 80");
});
