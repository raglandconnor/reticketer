const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/reticketer")

.then(()=>{
    console.log('mongodb connected')
})
.catch(()=>{
    console.log('error');
})

const ticketSchema = new mongoose.Schema({
    seller:{
    type:String,
    required:true
    },
    event:{
        type:String,
        required: true
    },
    price:{ 
        type:Number,
        required: true},
    location:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    }
})

const collection = new mongoose.model('tickets',ticketSchema)
data={
    sellerEmail:"seller@gmail.com",
    event:"apples",
    price:40,
    location:"norway",
    date:"today"

}

collection.insertMany([data])
