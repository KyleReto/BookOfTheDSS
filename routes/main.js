const Express = require('express');
const QuoteDB = require('../models/quoteDB.js');

var router = Express.Router();

router.get('/quote', function(req, res){
  res.render('quote',{quote: QuoteDB.getRandomQuote()});
})

router.get('/quote/:id', function(req, res){
  console.log(QuoteDB.getQuote(req.params.id));
  res.render('quote',{quote: QuoteDB.getQuote(req.params.id)});
})

router.get('/*', function(req, res){
  res.render('index');
});

module.exports = router
