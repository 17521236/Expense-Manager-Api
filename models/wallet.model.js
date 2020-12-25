const mongoose = require('mongoose')
const walletSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    _userId: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    createAt: Date
});


module.exports = mongoose.model('Wallet', walletSchema);