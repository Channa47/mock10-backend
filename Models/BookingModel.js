const mongoose = require('mongoose');


const bookSchema = mongoose.Schema({
        user : { type: String, ref: 'User' },
        flight : { type: String, ref: 'Flight' }
});

const BookModel = mongoose.model('booking',bookSchema);

module.exports = BookModel;