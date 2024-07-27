const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://localhost:27017/reticketer',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const ticketSchema = mongoose.Schema({
    event:String,
    price:Number,
    location:String,
    date:String
})

const TicketModel = mongoose.model("tickets", ticketSchema)


app.get("/getTickets",(req,res)=>{
    const { event, location, date } = req.query;
  const query = {};

  if (event) {
    query.event = event;
  }
  if (location) {
    query.location = location;
  }
  if (date) {
    query.date = date;
  }

  TicketModel.find(query)
    .then(tickets => {
      res.json(tickets);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error fetching tickets');
    });
});


app.listen(3001, ()=>{
    console.log("Server is running")
});

