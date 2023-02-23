const mongoose = require('mongoose');

const flightScheama = mongoose.Schema({
        airline: String,
        flightNo: String,
        departure: String,
        arrival: String,
        departureTime: Date,
        arrivalTime: Date,
        seats: Number,
        price: Number
})

const FlightModel = mongoose.model('flight',flightScheama)
module.exports = FlightModel;