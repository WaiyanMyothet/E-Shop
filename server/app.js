require("dotenv").config();

/* Express */
const express = require("express");
const path=require('path');
// Database connection imports
const db = require("./database/dbconnection");
db.dbConnection();


/** Passport Configuration */
const passport = require("passport");
require("./authentication/passport")(passport);


/** Routes */

const authRoutes=require('./routes/auth');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/** Routes Definitions */
app.use("/api/auth", authRoutes);
/* GET home page. */
app.get('/', function(req, res, next) {
    res.render('index.jade', { title: 'Veniqa' });
  });
module.exports=app;
