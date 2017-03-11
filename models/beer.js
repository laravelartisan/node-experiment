var mongoose = require('mongoose');

// Define our beer schema
var BeerSchema   = new mongoose.Schema({
    name: String,
    quote: String,
});

// Export the Mongoose model
module.exports = mongoose.model('Beer', BeerSchema);