// 
const mongoose = require('mongoose');


const connection = mongoose.connect('mongodb+srv://channa:channa@cluster0.nmcxnbf.mongodb.net/database?retryWrites=true&w=majority')


module.exports = connection ; 