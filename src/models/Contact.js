const mongoose = require('mongoose')

const Contact = mongoose.Schema({
    email : String,
    phone : String,
    subject : String,
    query : String
})

module.exports = mongoose.model('contact',Contact)
