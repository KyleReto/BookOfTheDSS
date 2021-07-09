const Quote = require('../models/quote.js');
const Message = require('../models/message.js');
const QuoteDB = require('../models/quoteDB.js');
const Express = require('express');
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false});

let router = Express.Router();

router.post('/newquote', urlencodedParser, async function(req, res){
	// TODO: Add a password system, so that only authorized users can add quotes.
	// This form is for internal use only. I'd love to make it accept variable amounts of messages, but this approach doesn't really allow for it, and I can't justify refactoring for something that only I will use.
	console.log(req.body);
	let message1 = new Message(req.body.sender1, req.body.message1, req.body.embed1);
	let message2 = new Message(req.body.sender2, req.body.message2, req.body.embed2);
	let message3 = new Message(req.body.sender3, req.body.message3, req.body.embed3);
	let message4 = new Message(req.body.sender4, req.body.message4, req.body.embed4);
	let message5 = new Message(req.body.sender5, req.body.message5, req.body.embed5);
	let message6 = new Message(req.body.sender6, req.body.message6, req.body.embed6);
	let message7 = new Message(req.body.sender7, req.body.message7, req.body.embed7);
	let message8 = new Message(req.body.sender8, req.body.message8, req.body.embed8);
	let temp = [message1, message2, message3, message4, message5, message6, message7, message8];
	let messages = [];
	// Process input request before sending to DB
	for (let i = 0; i < temp.length; i++){
		// Remove the message if the sender is empty
		if (temp[i].sender != ""){
			let message = temp[i];
			// Null the embed if empty
			if (message.embedPath == ""){
				message.embedPath = null;
			}
			messages.push(message);
		}
	}
	let quote = new Quote(messages);
	let id = await QuoteDB.addQuote(quote);
	console.log(quote);
	res.redirect('/quote/' + id);
});

router.get('/addQuote', function(req, res){
	res.render('submit');
})

router.get('/quote', function(req, res){
	res.redirect('/quote/' + QuoteDB.getRandomID().toString());
});

router.get('/quote/:id', async function(req, res){
	let quote = await QuoteDB.getQuote(req.params.id);
	return res.render('quote',{quote: quote});
});

router.get('/*', async function(req, res){
	res.render('index');
});

module.exports = router
