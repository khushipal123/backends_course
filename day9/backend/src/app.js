const express = require("express");
const noteModel = require("./config/model/notes.model");
const cors = require("cors");
const path = require("path")

const app = express()


app.use(express.static("./public"))
app.use(express.json())
app.use(cors())

app.post("/notes", async (req, res) => {
    const { title, description } = req.body
    const note = await noteModel.create({ title, description })

    res.status(201).json({
        message: "Note created successfully"
    })
})

app.get("/notes", async (req, res) => {
    const note = await noteModel.find()
    res.status(200).json({
        message: "Note Shows successfully",
        note
    })
})

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)

    res.status(200).send("Note deleted successfully ")
})

app.patch("/notes/:id" , async(req,res)=>{
    const id = req.params.id
    const {description} = req.body
    await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
                message: "Note Update successfully",

    })
})



app.use("*name", (req, res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html") )
})

module.exports = app