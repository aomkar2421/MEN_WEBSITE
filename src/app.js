const express = require('express')
const routes = require('./routes/main')
const hbs = require('hbs')
const mongoose = require('mongoose')
const Detail = require('./models/Detail')
const Slider = require('./models/Slider')
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

// Slider.create([
//     {
//         title : 'Service 1',
//         subtitle : 'Service 1 Description',
//         imgUrl : 'static/images/slider1.jpg',
//         class : 'active
//     },
//     {
//         title : 'Service 2',
//         subtitle : 'Service 2 Description',
//         imgUrl : 'static/images/slider2.jpg'
//     },
//     {
//         title : 'Service 3',
//         subtitle : 'Service 3 Description',
//         imgUrl : 'static/images/slider3.jpg'
//     },
//     {
//         title : 'Service 4',
//         subtitle : 'Service 4 Description',
//         imgUrl : 'static/images/slider4.jpg'
//     }
// ])

app.listen(4500, () => {
    console.log("Server Started")
})
