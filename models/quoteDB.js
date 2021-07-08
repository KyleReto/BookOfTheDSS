
// This file represents a database connection to handle pulling Quote objects from the database. Static.
const Quote = require('./quote.js');
const Message = require('./message.js');
const Mongoose = require('mongoose');

// Connect to the database
Mongoose.connect('mongodb://localhost/BookOfTheDSS', {dbName: 'BookOfTheDSS', useNewUrlParser: true, useUnifiedTopology: true});
const connection = Mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));

// Define the schema, which tells the DB how to store a thing
const quoteSchema = new Mongoose.Schema({
	_id: {type: Number, required: true},
	quote: {type: String}
});
const QuoteModel = Mongoose.model('quote', quoteSchema, 'quotes');

// This stores the next available ID for a quote in the database.
// Mongo doesn't innately allow for incremental IDs, so I've implemented my own. It has flaws, but I think it's the best option for the situation.
let nextId = 0;

class QuoteDB{
	// Add a new quote to the database
	static async addQuote(quote){
		return new Promise((resolve, reject) => {
			QuoteDB.updateNextId().then((data) => {
				// naming variables is hard...
				let quoteToSave = new QuoteModel({_id: nextId, quote: JSON.stringify(quote)});
				quoteToSave.save().then(async (data) => {
					resolve(nextId);
				});
			}).catch((err) => {
				return reject(err);
			});
		});
		
	}

	// Get a specified quote by its ID. Returns promise that resolves with the quote.
	static async getQuote(id){
		return new Promise((resolve,reject) => {
			QuoteModel.findById(id).then((data) => {
				let quote = Quote.deserialize(data.quote);
				resolve(quote);
			}).catch((err) => {
				reject(err);
			});
		});
	}

	static getRandomID(){
		// Get a random valid ID from the database
		/*let message1 = new Message("Kyle", "Imagine having an MBA");
		let message2 = new Message("Zach", "Wait, like, basketball?");
		let message3 = new Message("David", "The largest basketball tournament in the mation");
		let quote = new Quote([message1, message2, message3]);
		return quote;*/
	}

	// Updates the nextId variable to be the next free id.
	// Should always be called before adding quotes
	// This is a little janky, but adding sequential items is surprisingly hard.
	// This should only do one iteration per addition under normal circumstances, but may run more times if nextId needs to be corrected.
	static async updateNextId(){
		for (let i = nextId; i < Infinity; i++){
			let doesQuoteExist = await QuoteModel.exists({_id: i});
			if (!doesQuoteExist){
				nextId = i;
				break;
			}
		}
	}
}

module.exports = QuoteDB;
