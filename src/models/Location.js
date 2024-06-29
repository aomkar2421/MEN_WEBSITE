const mongoose = require('mongoose')

const Location = mongoose.Schema({
    city : String,
    location : String,
    optional : String
})

module.exports = mongoose.model('location',Location)
