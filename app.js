const express = require('express');
const session = require('express-session');
const mainRouter = require('./routes/main.js');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/', mainRouter);

app.listen(3000);
