var express = require("express");
var app = express();
var fs = require('fs')
var dbfunc = require('./db-function');
var bodyParser = require('body-parser');
const { addUser, getUserById, updateUserById } = require('../app/routes/user.route');
const { authentic } = require('../app/routes/authentic.route');
const { addCandidate, getCandidateById, getCandidateByConstituencyId } = require('../app/routes/candidate.route')
const { addAdmin, loginAdmin } = require('../app/routes/admin.route')
const { createDatabase } = require('../app/models/creatServerAndTable')

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

createDatabase();

app.use(express.static(__dirname + '/images'));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.get(`/images/*`, (req,res) => {
  console.log(req.url)
  fs.readFile(`${process.env.PWD}/${req.url}`, function(err, data) {
    if (err) throw err; // Fail if the file can't be read.
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(data); // Send the file data to the browser.
  });
})
app.get('/', (req,res) => {
    res.send('Welcome to InstaVote Backend');
});

app.post('/user', addUser);
app.post('/userUpdate', updateUserById);
app.get('/userId', getUserById)
app.post('/login', authentic);
app.post('/getCandidate', getCandidateById);
app.post('/candidate', addCandidate);
app.post('/constituency', getCandidateByConstituencyId);
app.post('/admin', loginAdmin);
app.post('/addAdmin', addAdmin);


var ApiConfig = {
  app: app
}

module.exports = ApiConfig;
