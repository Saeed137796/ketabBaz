const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

app.use(require('./http/middlewares/morgan'));
app.use(require('./http/middlewares/errorHandler'));

mongoose.connect('mongodb://localhost/ketabbaz', {useNewUrlParser: true, useUnifiedTopology: true}).then((res)=>console.log('server is runnedd')).catch(err=>console.log('error is happened'));
app.use(require('./routes/api'));

app.listen(3000, (err) => console.log(err));