const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/reticketer')

const ticketSchema = mongoose.Schema({
    event:String,
    price:Number,
    location:String,
    date:String
})

const TicketModel = mongoose.model("tickets", ticketSchema)


app.get("/getTickets",(req,res)=>{
    TicketModel.find({}).then(function(tickets){
        res.json(tickets)
    }).catch(function(err){
        console.log(err)
    })
   

})

app.listen(3001, ()=>{
    console.log("Server is running")
})

