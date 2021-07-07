
// This file represents a database connection to handle pulling Quote objects from the database.
const Quote = require('./quote.js');
const Message = require('./message.js');
const mongoose = require('mongoose');

class QuoteDB{
  static getQuote(id){
    // Placeholder method
    let message1 = new Message("Kyle", id.toString());
    let message2 = new Message("Zach", "Wait, like, basketball?");
    let message3 = new Message("David", "The largest basketball tournament in the mation");
    let quote = new Quote([message1, message2, message3]);
    return quote;
  }

  static getRandomQuote(){
    // Placeholder
    let message1 = new Message("Kyle", "Imagine having an MBA");
    let message2 = new Message("Zach", "Wait, like, basketball?");
    let message3 = new Message("David", "The largest basketball tournament in the mation");
    let quote = new Quote([message1, message2, message3]);
    return quote;
  }
}

module.exports = QuoteDB;
