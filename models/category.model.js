const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: Number,
        require: true
    },
    image: String,
    createAt: Date
});


module.exports = mongoose.model('Category', categorySchema);