//Day1
// task 1
let Name= "khushi";
let age= 20;

console.log(`My Name ${Name} and My age ${age}`);



// task 2 
let a= 30+6;
console.log(`addition of tow numbers ${a}`);


// task 3
 const express= require("express");// import express

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