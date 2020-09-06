var express = require('express');
var app = express();
//handle authentication
var passport = require('passport')
var session = require('express-session')
/*************************/
var bodyParser = require('body-parser')
var env = require('dotenv').load();
var exphbs = require('express-handlebars')

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*****For Passport******/
//session secret
app.use(session({secret: 'keyboard cat',resave: true, saveUninitialized:true}));
app.use(passport.initialize());
//persistent login sessions
app.use(passport.session())
/***********************/

/*****For Handlebars****/
app.set('views', './app/views')
app.engine('hbs' ,exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs')
/***********************/

//Signin or Signup
var controll = require('./app/controllers')
    , path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', controll.index)

//app.get('/',function(req, res) {

//  res.send('Welcome to Passport with Sequelize');

//});

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function(){
  console.log('Nice! Database looks fine')
}).catch(function(err){
  console.log(err, "Something went wrong with the Database Update!")
});


//LoginPage
//var controll = require('./app/controllers/index.js')

//app.get('/', index);

//https
var https = require('https')
   ,fs = require("fs");

var options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./certificate.pem')
};

https.createServer(options, app).listen(10092, function(){
  console.log('Https server listening on port ' + 10092);
});

/*
app.listen(10095, function(err){

  if(!err)
    console.log("Site is live");
  else 
    console.log(err);

});
*/
