const mongoose = require("mongoose") 
const ballonSchema = mongoose.Schema({ 
 gas: String, 
 colour: String,
 count:{
    type:Number,
    min: 10,
    max: 30 }
 }) 
 
module.exports = mongoose.model("Ballon", 
ballonSchema)