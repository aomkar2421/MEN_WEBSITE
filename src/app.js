const express = require('express')
const routes = require('./routes/main')
const hbs = require('hbs')
const mongoose = require('mongoose')
const Detail = require('./models/Detail')
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
// Detail.create({
//     brandName : "ServiceHub",
//     brandUrl : "static/images/logo.png",
//     links:[
//         {
//             label : "Home",
//             url : "/"
//         },
//         {
//             label : "Services",
//             url : "/services"
//         },
//         {
//             label : "About Us",
//             url : "/about"
//         },
//         {
//             label : "Contact Us",
//             url : "/contact"
//         },
//         {
//             label : "Gallery",
//             url : "/gallery"
//         }
//     ] 
// })

app.listen(4500, () => {
    console.log("Server Started")
})
