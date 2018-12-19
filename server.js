var express = require('express');
var path = require('path');
var app = express();

app.use('/static', express.static('public'))

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index', {page:'Home'});
});

// about page 
app.get('/about', function(req, res) {
    var tagline = "Any code ";
    res.render('pages/about',  { page: "About", tagline: tagline});
});

// contact page 
app.get('/contact', function(req, res) {
    res.render('pages/contact',  {page:'Contact'});
});

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });



// app.get('/about', function (req, res) {
//     res.sendFile(__dirname + '/about.html');
// });

app.get('/service', function (req, res) {
    res.sendFile(__dirname + '/service.html');
});

app.post('/submit-student-data', function (req, res) {
	var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
    console.log('Run on : http://127.0.0.1:5000/');
});
