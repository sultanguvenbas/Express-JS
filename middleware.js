const express = require('express');
const app = express.Router();


app.use(express.json());

// //Simple request time logger
// app.use('/', function (req,res,next) {
//     console.log("A new request received at " + Date.now());
//
//     //This function call is very important. It tells that more processing is
//     //required for the current request and is in the next middleware
//
//     next();
// });
// // Route handler that sends the response
// app.get('/', function (req,res) {
//     res.send('Router');
// })

//First middleware before response is sent
app.use(function(req, res, next){
    console.log("Start");
    next();
});

//Route handler
app.get('/', function(req, res, next){
    res.send("Middle");
    next();
});
app.use('/', function(req, res){
    console.log('End');
});

module.exports = app;