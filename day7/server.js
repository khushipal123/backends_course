const app = require("./src/app")
const ConnectToDb = require("./src/config/database")
require("dotenv").config()



ConnectToDb()


app.listen(3000,()=>{
    console.log("server is running")
})