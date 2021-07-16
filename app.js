const express = require('express');
const session = require('express-session');
const mainRouter = require('./routes/main.js');

var app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}`));
app.use('/assets', express.static('`${__dirname}/assets`'));
app.use('/scripts', express.static('`${__dirname}/scripts`'));
app.use('/favicon.ico', express.static('assets/favicon.ico'));
app.use('/', mainRouter);

app.listen(3000);
