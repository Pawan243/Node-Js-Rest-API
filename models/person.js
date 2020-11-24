const mongoose = require('mongoose')


const personSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type:Integer,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    mobile: {
        type: Integer,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Alien',alienSchema)