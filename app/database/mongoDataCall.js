// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors')
// const TicketModel = require('./models/ticket')

// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect("mongodb://localhost:27017/reticketer")

// app.get('/getTickets', (req, res)=>{
//     TicketModel.find().
//     then(tickets => res.json(tickets))
//     .catch(err => res.json(err))
//         console.log(err)
//     })



// app.listen(3001,()=>{
//     console.log("Server is running")
// })





// module.exports = {
//     getTickets
// };


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// const app = express()
app.use(cors({
    origin: 'http://localhost:3000'  // Replace with your frontend's URL
  }));
// app.use(express.json())

mongoose.connect("mongodb://localhost:27017/reticketer")

const TicketSchema = new mongoose.Schema({
    seller: String,
    event: String, 
    price: Number,
    location: String,
    date: String
})

const TicketModel = mongoose.model("tickets", TicketSchema)

app.get("/getTickets", (req, res)=>{
    TicketModel.find({}).then(function(tickets){
        res.json(tickets)})
        .catch(function(err){
            console.log(err)
        })
    })


    app.listen(3001,()=>{
        console.log("server is running")
    })