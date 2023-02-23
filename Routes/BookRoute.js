const express = require('express');

const BookingModel = require('../Models/BookingModel');

const BookRoute = express.Router();

BookRoute.post('/',async(req,res)=>{
    let obj = req.body;
    try{
       let boook = new BookingModel(obj);
       await boook.save();
       res.send('booked')
    }catch(e){
        res.send(e);
    }
})


BookRoute.post('/',async(req,res)=>{
    let obj = req.body;
    try{
       let booking = await BookingModel.find();
       res.send({data:booking,statsu:200});
    }catch(e){
        res.send(e);
    }
})
module.exports = BookRoute