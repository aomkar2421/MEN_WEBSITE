const mongoose = require('mongoose')

const Banner = mongoose.Schema({
    title : String,
    subtitle : String,
    imgUrl : String,
})
module.exports = mongoose.model('banner',Banner)
