const mongoose = require("mongoose") 
const ballonSchema = mongoose.Schema({ 
 gas: String, 
 colour: String,
 count: Number
}) 
 
module.exports = mongoose.model("Ballon", 
ballonSchema)