
const { default: mongoose } = require("mongoose");
const app = require("./src/app.js"); 
const Mongoose = require("mongoose");
require("dotenv").config()

function ConectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database is Conected");
    })
}

ConectToDb()




app.listen(3000, () => {           
    console.log("server is running");
});