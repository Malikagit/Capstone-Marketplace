const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/product');
const authRouter = require('./routes/auth');
//const userRouter = require('./routes/user');



const db = require("./models");

const { getUserFromToken, addTokenFunc } = require('./config/jwt');

// Middlewares
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./config/jwt');
app.use(cookieParser());
app.use(addTokenFunc);
app.use(getUserFromToken);


// Register routes
app.use('/', indexRouter);
app.use('/', authRouter);
//app.use('/', userRouter);

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})

module.exports = app;
