const express = require('express');

const authRouter = require('./routes/auth');

const app = express();

const PORT = process.env.PORT || 5000;


// Register routes
app.use('/', authRouter);


app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})