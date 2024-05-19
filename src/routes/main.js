const express = require("express")
const {route} = require('express/lib/application')
const routes = express.Router()
const Detail = require("../models/Detail")
const Slider = require("../models/Slider")
const Service = require("../models/Service")
const Contact = require("../models/Contact")

routes.get('', async (req,resp) => {
    let details =await Detail.findOne({ "_id":"661b7e629303ab08bdf2d12d" });
    let slider =await Slider.find();
    let service =await Service.find();
    resp.render('index',{
        details: details,
        slider : slider,
        service : service
    })
})

routes.get('/gallery', async (req,resp) => {
    let details =await Detail.findOne({ "_id":"661b7e629303ab08bdf2d12d" });
    resp.render('gallery',{
        details: details
    })
})

routes.get('/queries', async (req,resp) => {
    let details =await Detail.findOne({ "_id":"661b7e629303ab08bdf2d12d" });
    let contact =await Contact.find();
    resp.render('admin',{
        details: details,
        contact : contact
    });
})

routes.get('/admin', async (req,resp) => {
    let details =await Detail.findOne({ "_id":"661b7e629303ab08bdf2d12d" });
    let slider =await Slider.find();
    let service =await Service.find();
    resp.render('admin',{
        details: details,
        slider : slider,
        service : service,
    });
})


routes.post('/process-form',async (req,resp)=>{
    console.log("form submitted succesfully");
    console.log(req.body);

    try{
        const data = await Contact.create(req.body);
        console.log(data)
        resp.redirect('/')
    }catch(e){
        console.log(e);
        console.log("Error Occured")
        resp.redirect('/')
    }

})

module.exports = routes
