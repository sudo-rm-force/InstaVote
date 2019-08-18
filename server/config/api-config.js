var express = require("express");
var app = express();
var path  = require('path');
var dbfunc = require('./db-function');
var bodyParser = require('body-parser');
const { addUser, getUserById } = require('../app/routes/user.route');
const { authentic } = require('../app/routes/authentic.route');

dbfunc.connectionCheck.then((data) =>{
    console.log(data);
 }).catch((err) => {
     console.log(err);
 });
 
 app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req,res) => {
    res.send('hello world');
});

app.post('/user', addUser);
app.post('/login', authentic);


var ApiConfig = {
  app: app
}

module.exports = ApiConfig;
