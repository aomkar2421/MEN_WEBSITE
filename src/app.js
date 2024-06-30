const express = require('express')
const routes = require('./routes/main')
const hbs = require('hbs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Detail = require('./models/Detail')
const Slider = require('./models/Slider')
const Service = require('./models/Service')
const Banner = require('./models/Banner')
const Location = require('./models/Location')
const app = express()

const hostname = '0.0.0.0';
const port = 4500;

//routes and static files
app.use(bodyParser.urlencoded({
    extended : true
}))

app.use('',routes)
app.use('/static',express.static('public'))


//view engine
app.set("view engine" , 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

hbs.registerHelper('even', function (index) {
    return index % 2 === 0;
});  

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
//         class : 'active'
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

// Service.create([
//     {
//         icon : 'fas fa-user-graduate',
//         title : 'Best Courses',
//         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam consequuntur dicta tenetur, consectetur recusandae?',
//         linkText : 'Support',
//         link : '#',
//     },
//     {
//         icon : 'fas fa-user-graduate',
//         title : 'Best Courses',
//         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam consequuntur dicta tenetur, consectetur recusandae?',
//         linkText : 'Support',
//         link : '#',
//     },
//     {
//         icon : 'fas fa-user-graduate',
//         title : 'Best Courses',
//         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam consequuntur dicta tenetur, consectetur recusandae?',
//         linkText : 'Support',
//         link : '#',
//     },
//     {
//         icon : 'fas fa-user-graduate',
//         title : 'Best Courses',
//         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam consequuntur dicta tenetur, consectetur recusandae?',
//         linkText : 'Support',
//         link : '#',
//     },
//     {
//         icon : 'fas fa-user-graduate',
//         title : 'Best Courses',
//         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam consequuntur dicta tenetur, consectetur recusandae?',
//         linkText : 'Support',
//         link : '#',
//     },
//     {
//         icon : 'fas fa-user-graduate',
//         title : 'Best Courses',
//         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam consequuntur dicta tenetur, consectetur recusandae?',
//         linkText : 'Support',
//         link : '#',
//     }
// ])

// Banner.create([
//     {
//         title : 'We Work For People, Not For Money',
//         subtitle : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vel ad magnam vitae earum rem amet? Praesentium ullam, nostrum, doloremque provident quam culpa quia, nemo perferendis assumenda libero nihil pariatur.',
//         imgUrl : 'static/images/banner1.jpg',
//     },
//     {
//         title : 'We Work For People, Not For Money',
//         subtitle : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vel ad magnam vitae earum rem amet? Praesentium ullam, nostrum, doloremque provident quam culpa quia, nemo perferendis assumenda libero nihil pariatur.',
//         imgUrl : 'static/images/banner2.jpg'
//     },
//     {
//         title : 'Service 3',
//         subtitle : 'If you want to visit our office or need an offline discussion on any kind of project. Contact our support team to fix your appointment.',
//         imgUrl : 'static/images/banner3.png'
//     }
// ])

// Location.create([
//     {
//         city : 'Pune',
//         location : 'Sinhgad Campus',
//         optional : 'Newest Location'
//     },
//     {
//         city : 'Pune',
//         location : 'Sinhgad Campus',
//         optional : 'Newest Location'
//     }
// ])

app.listen(port, hostname, () => {
    console.log("Server Started")
})