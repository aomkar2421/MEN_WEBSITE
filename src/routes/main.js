const express = require("express")
const {route} = require('express/lib/application')
const routes = express.Router()
const Detail = require("../models/Detail")

routes.get('', async (req,resp) => {
    let details =await Detail.findOne({ "_id":"661b7e629303ab08bdf2d12d" });
    resp.render('index',{
        details: details
    })
})

routes.get('/gallery', async (req,resp) => {
    let details =await Detail.findOne({ "_id":"661b7e629303ab08bdf2d12d" });
    resp.render('gallery',{
        details: details
    })
})



module.exports = routes
