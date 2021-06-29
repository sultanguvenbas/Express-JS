const express = require('express'); //import express
const app = express(); //assign it to app

//This is to parse through incoming data through your HTTP requests
app.use(express.json());

app.get('/home', function (req, res){
    res.send("Hello World");
});

app.post('/home',function (req,res){
    res.send("Sultan");
});

const router = require('./router.js'); //it is gonna use router.js file
app.use('/router', router); // I can call /router (like /ali)

const account = require('./get.js');
app.use('/account',account);

//////Middleware ///////////
const middleware = require('./middleware.js');
app.use('/middleware',middleware);

/////////Templating//////
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first_template', function(req, res){
    res.render('first_view');
});

app.get('/dynamic_view', function (req,res) {
    // res.render('dynamic', {
    //     name: 'Ali Akgöl',
    //     url: "http://www.tutorialspoint.com"
    // });
    res.render('dynamic',{
        // user: {name: "Ali Akgöl", age:"20"}
    })
});

app.get('/components',function (req,res) {
    res.render('content');
});

/////////////////Serving static files/////
app.use(express.static('public'));


////////////Form Data////////////////////
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.get('/', function(req, res){
    res.render('form');
});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/', function(req, res){
    console.log(req.body);
    res.send("recieved your request!");
});

////////////////////////Database Connection/////////////////
const database = require('./database.js');
app.use('/database',database);


app.listen(3000);