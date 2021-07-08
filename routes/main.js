const Quote = require('../models/quote.js');
const Message = require('../models/message.js');
const QuoteDB = require('../models/quoteDB.js');
const Express = require('express');
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false});

let router = Express.Router();

router.post('/newquote', urlencodedParser, async function(req, res){
	// TODO: Revamp this method to allow for arbitrary quote lengths
	// TODO: Add a password system, so that only authorized users can add quotes.
	let message1 = new Message(req.body.sender1, req.body.message1);
	let message2 = new Message(req.body.sender2, req.body.message2, req.body.embed2);
	let quote = new Quote([message1, message2]);
	let id = await QuoteDB.addQuote(quote);
	res.redirect('/quote/' + id);
});

router.get('/addQuote', function(req, res){
	res.render('submit');
})

router.get('/quote', function(req, res){
	res.render('quote',{quote: QuoteDB.getRandomQuote()});
});

router.get('/quote/:id', async function(req, res){
	let quote = await QuoteDB.getQuote(req.params.id);
	return res.render('quote',{quote: quote});
});

router.get('/*', async function(req, res){
	res.render('index');
});

module.exports = router
