const express = require("express")
const {route} = require('express/lib/application')
const routes = express.Router()
const Detail = require("../models/Detail")
const Slider = require("../models/Slider")

routes.get('', async (req,resp) => {
    let details =await Detail.findOne({ "_id":"661b7e629303ab08bdf2d12d" });
    let slider =await Slider.find();
    resp.render('index',{
        details: details,
        slider : slider
    })
})

routes.get('/gallery', async (req,resp) => {
    let details =await Detail.findOne({ "_id":"661b7e629303ab08bdf2d12d" });
    resp.render('gallery',{
        details: details
    })
})



module.exports = routes
