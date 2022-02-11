const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 5000;
const indexRouter = require('./routes/product');
const authRouter = require('./routes/auth');


const app = express();
const db = require("./models")

const { Product, User, Category } = require('./models')



// Register routes
app.use('/', indexRouter);
app.use('/', authRouter);


app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})