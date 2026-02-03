const { default: mongoose } = require("mongoose");
const Mongoose=  require("mongoose");

const noteSchema = new mongoose.Schema({
    title: String,
    description:String

})

const noteModel = mongoose.model("day-9" ,noteSchema)

module.exports = noteModel