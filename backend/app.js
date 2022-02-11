const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 5000;

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
app.use('/', authRouter);
app.use('/', userRouter);

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})

module.exports = app;