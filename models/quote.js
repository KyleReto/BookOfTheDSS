
// Represents quote objects that will be stored in the database.
class Quote{
	// messages is an array of Message objects
	// This class may be expanded in future, but for now this is all it needs.
	constructor(messages){
		this.messages = messages;
	}

	static deserialize(object){
		let quote = JSON.parse(object);
		return new Quote(quote.messages);
	}
}

module.exports = Quote;
