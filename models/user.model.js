const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
        ,
        trim:true
    },
    password: {
        type: String,
        require: true,
        trim:true
    },

    createAt: Date
});


module.exports = mongoose.model('User', userSchema);