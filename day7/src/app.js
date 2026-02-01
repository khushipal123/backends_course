const express = require("express")
const noteModel = require("./config/model/notes.model")

const app = express()
app.use(express.json())


app.post("/notes", async(req ,res )=>{
    const {title ,description} =req.body
    const note = await noteModel.create({
        title , description
    })
    res.status(201).json({
        Massege:"Note Created",
        note
    })
})

app.get("/notes" ,async(req ,res )=>{
        const note = await noteModel.find()

        res.status(200).json({
            Massege:" All note show",
            note

        })
})


module.exports = app
