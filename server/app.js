require("dotenv").config();

/* Express */
const express = require("express");
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

/** Routes Definitions */
app.use("/api/auth", authRoutes);

app.listen(3000);
