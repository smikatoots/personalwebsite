// var express = require('express');
// var session = require('express-session');
// var app = express();
// var bodyParser = require('body-parser');
// var ejs = require('ejs');
// app.use(bodyParser.urlencoded({ extended:false}));
// // app.set(views'', __dirname + '/')
// // app.engine('html', ejs.renderFile);
// // // app.set('view engine', 'html');
// //
// // app.get('/', function(req, res, next) {
// //     res.render('home.html');
// // });
//
// app.use(express.static(__dirname + '/'));
//
// app.get('/', function(req, res) {
//     res.render('home');
// });


var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.use("/styles",  express.static(__dirname + '/public/css'));
app.use("/scripts", express.static(__dirname + '/public/js'));
app.use("/images", express.static(__dirname + '/public/assets'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/home.html'));
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
