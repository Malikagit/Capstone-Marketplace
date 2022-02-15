const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const indexRouter = require('./routes/product');
const authRouter = require('./routes/auth');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const res = require('express/lib/response');
const { send } = require('express/lib/response');
const db = require("./models")

const { Product, User, Category, CategoryProduct } = require('./models')



// Register routes
app.use('/', indexRouter);
app.use('/', authRouter);


app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})