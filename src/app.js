const express = require('express')
const routes = require('./routes/main')
const hbs = require('hbs')
const app = express()

app.use('',routes)

app.set("view engine" , hbs)
app.set("views","views")

app.listen(4500, () => {
    console.log("Server Started")
})
