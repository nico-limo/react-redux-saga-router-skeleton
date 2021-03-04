const express = require('express');
const app = express();

//Import Routes

const authRoute = require('./routes/auth');


//Routes Middlewares
app.use('/api/user', authRoute);

app.listen(8000, ()=> console.log('Server Up and running'))