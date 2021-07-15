
// Represents quote objects that will be stored in the database.
class Quote{
	// messages is an array of Message objects
	constructor(messages){
		this.messages = messages;
	}

	static deserialize(object){
		let quote = JSON.parse(object);
		quote = new Quote(quote.messages);
		return quote;
	}
}

module.exports = Quote;
