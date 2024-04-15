const mongoose = require('mongoose')

const Slider = mongoose.Schema({
    title : String,
    subtitle : String,
    imgUrl : String,
    class : String
})

module.exports = mongoose.model('slider',Slider)