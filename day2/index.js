 
 const express = require("express");// import express

  const Aap = express() //call he express server
   Aap.get("/" ,(req ,res)=>{
      res.send("This msg for you....")//response
   })
    Aap.get("/about" ,(req ,res)=>{
      res.send("This msg for About you....")//response
   })

  Aap.listen(5317 , ()=>{
    console.log("start the server....")// server running...

  })

