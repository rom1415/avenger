const mongoose = require('mongoose')

const heroesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Heroes', heroesSchema);