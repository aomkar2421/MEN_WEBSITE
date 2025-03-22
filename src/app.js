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
const Image = require('./models/Image')
const app = express()
require('dotenv').config();

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
// const uri = "mongodb://localhost/servicehub";
const uri = process.env.MONGODB_URI;

mongoose.connect(uri);
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
//         title : 'Our Delicious Menu',
//         subtitle : 'Explore a Variety of Cakes, Pastries, and Breads',
//         imgUrl : 'static/images/slider10.png',
//         class : 'active'
//     },
//     {
//         title : 'Specialty Cakes',
//         subtitle : 'Custom-Made Cakes for Every Occasion',
//         imgUrl : 'static/images/slider11.jpg'
//     },
//     {
//         title : 'Daily Fresh Bread',
//         subtitle : 'From Sourdough to Baguettes: Baked Fresh Daily',
//         imgUrl : 'static/images/slider13.jpg'
//     },
//     {
//         title : 'Sweet Treats',
//         subtitle : 'Indulge in Our Selection of Cookies, Muffins, and More',
//         imgUrl : 'static/images/slider14.jpg'
//     }
// ])

// Service.create([
//     {
//         icon : 'static/images/service2.jpg',
//         title : 'Artisanal Breads',
//         description : 'Handcrafted using traditional techniques and naturally leavened for superior taste and texture.',
//         linkText : 'Support',
//         link : '#',
//     },
//     {
//         icon : 'static/images/service3.jpg',
//         title : 'European-Inspired Pastries',
//         description : 'A delightful selection of pastries inspired by classic European recipes, freshly baked daily',
//         linkText : 'Support',
//         link : '#',
//     },
//     {
//         icon : 'static/images/service4.jpg',
//         title : 'Custom Cakes',
//         description : 'Beautiful, custom-designed cakes for weddings, birthdays, and special occasions',
//         linkText : 'Support',
//         link : '#',
//     },
//     {
//         icon : 'static/images/service5.jpg',
//         title : 'Special Orders',
//         description : 'Personalized orders for pastries, breads, and cakes tailored to your specific needs',
//         linkText : 'Support',
//         link : '#',
//     },
//     {
//         icon : 'static/images/service6.jpg',
//         title : 'Farm-to-Table Ingredients',
//         description : 'Sourcing the best local produce and ingredients directly from small family farms',
//         linkText : 'Support',
//         link : '#',
//     },
//     {
//         icon : 'static/images/service7.jpg',
//         title : 'Healthy Treats',
//         description : 'Indulge in delicious baked goods made with wholesome ingredients for a guilt-free treat',
//         linkText : 'Support',
//         link : '#',
//     }
// ])

// Banner.create([
//     {
//         title : 'Celebrating the Seasons',
//         subtitle : 'Taste the best of each season with our ever-changing menu, featuring the finest local ingredients',
//         imgUrl : 'static/images/banner2.jpg',
//     },
//     {
//         title : 'Celebrating Local Farmers',
//         subtitle : 'Meet the growers who bring fresh, unique produce to our kitchen, and learn about their sustainable farming practices',
//         imgUrl : 'static/images/banner3.png'
//     },
//     {
//         title : 'Switchels & Shrubs',
//         subtitle : 'Discover the benefits and history of these refreshing traditional beverages in our informative and tasty workshops',
//         imgUrl : 'static/images/banner4.png'
//     }
// ])

// Location.create([
//     {
//         city : 'Pune',
//         location : 'Sinhgad Campus, Ambegaon Vadgaon Campus, Pune, Maharashtra 411041',
//         optional : 'Newest Location'
//     },
//     {
//         city : 'Pune',
//         location : 'Rajiv Gandhi Infotech Park, Hinjewadi Phase 1, Pune, Maharashtra 411057',
//         optional : 'Newest Location'
//     },
//     {
//         city : 'Bengaluru',
//         location : 'Manyata Tech Park, Nagawara, Bengaluru, Karnataka 560045',
//     },
//     {
//         city : 'Hyderabad',
//         location : 'HITEC City, Madhapur, Hyderabad, Telangana 500081',
//     },
//     {
//         city : 'Chennai',
//         location : 'Tidel Park, Rajiv Gandhi Salai, Taramani, Chennai, Tamil Nadu 600113',
//     },
//     {
//         city : 'Mumbai',
//         location : 'Mindspace, Malad West, Mumbai, Maharashtra 400064',
//     },
//     {
//         city : 'Noida',
//         location : 'Sector 62, Noida-Greater Noida Expressway, Noida, Uttar Pradesh 201309',
//     }
// ])

// Image.create([
//     { 
//         image : "https://www.jessicagavin.com/wp-content/uploads/2023/03/irish-brown-bread-16-1200-536x536.jpg",
//         tag : "product",
//         description : "Irish Brown Bread"
//     },
//     { 
//         image : "https://www.jessicagavin.com/wp-content/uploads/2023/12/biscuits-and-gravy-8-1200-536x536.jpg",
//         tag : "product",
//         description : "Biscuits and Gravy"
//     },
//     { 
//         image : "https://www.jessicagavin.com/wp-content/uploads/2023/11/sweet-cornbread-recipe-16-1200-536x536.jpg",
//         tag : "product",
//         description : "Sweet Cornbread"
//     },
//     { 
//         image : "https://www.jessicagavin.com/wp-content/uploads/2023/10/pumpkin-banana-bread-20-1200-536x536.jpg",
//         tag : "product",
//         description : "Pumpkin Banana Bread"
//     },
//     { 
//         image : "https://www.jessicagavin.com/wp-content/uploads/2020/05/strawberry-shortcake-10b-1200-536x536.jpg",
//         tag : "product",
//         description : "Strawberry Shortcake"
//     },
//     { 
//         image : "https://www.jessicagavin.com/wp-content/uploads/2023/02/irish-soda-bread-19-1200-536x536.jpg",
//         tag : "product",
//         description : "Irish Soda Bread"
//     },
//     { 
//         image : "https://www.jessicagavin.com/wp-content/uploads/2022/09/apple-turnovers-27-1200-536x536.jpg",
//         tag : "product",
//         description : "Apple Turnovers"
//     },
//     { 
//         image : "https://www.jessicagavin.com/wp-content/uploads/2021/11/cranberry-orange-bread-20-1200-500x500.jpg",
//         tag : "product",
//         description : "Cranberry Orange Bread"
//     },
//     { 
//         image : "https://imgs.search.brave.com/BnHtiBKbQzpuv2mWfvH59OWbJdiSJgOfGGmV-JozUWM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iYWtlcnktc3Rv/cmUtd2l0aC1kZWxp/Y2lvdXMtcGFzdHJ5/LXJldGFpbC1kaXNw/bGF5XzExODYyOC0z/ODEzLmpwZz9zZW10/PWFpc19oeWJyaWQ",
//         tag : "gallery",
//         description : "Pune"
//     },
//     { 
//         image : "https://imgs.search.brave.com/ZenO662Ej10qMvNif-twIbzW1_8u2rhlCAUDRRFekhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzYwLzkyLzY1/LzM2MF9GXzg2MDky/NjU4OV96RDVRR0tD/Qjd0UFhJOUpWc0JR/NEdKMXF5Z2RPck9h/ZC5qcGc",
//         tag : "gallery",
//         description : "Mumbai"
//     },
//     { 
//         image : "https://imgs.search.brave.com/MZDwu3MJtmIxFqPPOrmmjydwnQ8_FA02xgf_VqNMGNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/NDUyMTAyOC9waG90/by9tb2Rlcm4tYmFr/ZXJ5LWNhZmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTNV/dlUtTzRtaS1teTA2/OFN4RWo1WERWS0tM/ZzRKT24wZFotd1I2/NFFkME09",
//         tag : "gallery",
//         description : "Chennai"
//     },
//     { 
//         image : "https://imgs.search.brave.com/LxLb-OuW900JLKpRQ0oXgRvJR67TBCXPmIpgQMnxbaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTMz/MzkwMDY2L3Bob3Rv/L2Nha2UtZGVzc2Vy/dHMtaW4tc2hvd2Nh/c2Utd2luZG93LWlu/LWNvbmZlY3Rpb25l/cnktc3RvcmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWNP/TXFMcmRfNzdVUnV0/ZWNIb25VbXM4dzcy/T3Vnb21hc3pBY2V0/aUJKc0U9",
//         tag : "gallery",
//         description : "Hyderabad"
//     },
//     { 
//         image : "https://imgs.search.brave.com/WELgECgXUqZ_F7c5eAAc-0SeDUC_c6s7jzt7G0X2jNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE1/MjM4NTc2L3Bob3Rv/LzNkLXJlbmRlcmlu/Zy1vZi1hLWJha2Vy/eS1zaG9wLWludGVy/aW9yLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1EVjBRbVhK/V3Rla255SlJ4Y043/Zkh2WDBRRGVSc21k/OTZlUUFieDJ5VmMw/PQ",
//         tag : "gallery",
//         description : "Bengluru"
//     }
// ])

app.listen(port, hostname, () => {
    console.log("Server Started");
    console.log("Vkvkhvkvh");  
})