var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
	var tagline = "Any code of your own that you haven't looked at for";
    res.render('pages/about',  {
        tagline: tagline
    });
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
