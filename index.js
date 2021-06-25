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

app.listen(3000);