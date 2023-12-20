const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());// calling middleware json() helps to read/write json code 

/*Product Routes*/ 
const product = require("./routes/productRoutes");
app.use('/api/v1',product);

/*User Routes*/ 
const user = require("./routes/userRoutes");
app.use('/api/v1',user);

module.exports = app