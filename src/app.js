const express = require('express')
const routes = require('./routes/main')
const hbs = require('hbs')
const mongoose = require('mongoose')
const app = express()

//routes and static files
app.use('',routes)
app.use('/static',express.static('public'))

//view engine
app.set("view engine" , 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//dbconnection
mongoose.connect("mongodb://127.0.0.1:27017/servicehub")

app.listen(4500, () => {
    console.log("Server Started")
})
