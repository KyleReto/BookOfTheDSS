
let MarkdownIt = require('markdown-it');
// Represents quote objects that will be stored in the database.
class Quote{

	// messages is an array of Message objects
	constructor(messages){
		this.messages = messages;
	}

	static deserialize(object){
		let md = new MarkdownIt();
		let quote = JSON.parse(object);
		quote = new Quote(quote.messages);
		
		console.log(quote);
		for (let i = 0; i < quote.messages.length; i++){
			quote.messages[i].text = md.render(quote.messages[i].text);
		}
		return quote;
	}
}

module.exports = Quote;
