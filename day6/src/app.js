const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Khushi! Server is working 🚀");
});

module.exports = app;