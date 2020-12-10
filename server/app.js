require('dotenv').config();

/* Express */
const express=require('express');


/** Routes */

const authRoutes=require('./routes/auth');

var app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/** Routes Definitions */
app.use('/api/auth', authRoutes);

app.listen(3000);

