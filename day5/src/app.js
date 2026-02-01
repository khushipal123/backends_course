const express =require("express");


const app = express()
app.use(express.json())

const notes =[]


app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        "Massege":"note successfully created"
    })
    // console.log(req.body)
})
app.get("/notes",(req,res)=>{
    // res.send(notes)
    res.status(200).json({
        notes : notes
    })
})
app.delete("/notes/:index",(req , res)=>{
    delete notes[req.params.index]

    res.status(204).json({
        Massege:"note deleted successfully"
    })
})
app.patch("/notes/:index",(req,res)=>{

     notes [req.params.index].description = req.body.description
    //  notes[req.params.index].title = req.body.title

     res.status(200).json({
        Massege:"note updated"
     })
})

module.exports = app