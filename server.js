const express = require('express');
var cors = require('cors')
const UserrRoute = require('./Routes/UserRouter')
const connection = require('./Config/db');
const FlightRoute = require('./Routes/FlightRoutes');
const BookRoute = require('./Routes/BookRoute')

const app = express();
app.use(express.json());
app.use(cors({origin:"*"}))
app.use('/user',UserrRoute)
app.use('/flights',FlightRoute)
app.use('/booking',BookRoute)
app.get('/',(req,res)=>{
    res.send("Hello")
})


app.listen(8080,async()=>{
    try{
        connection;
        console.log("conected to db")
    }
    catch(e){
        console.log(e)
    }
    console.log("Statred")
})


