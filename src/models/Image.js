const mongoose = require('mongoose')

const Image = mongoose.Schema({
    image : String,
    tag : String,
    description : String,
})

module.exports = mongoose.model('image',Image)
