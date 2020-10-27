const mongoose = require('mongoose')
const transactionSchema = mongoose.Schema({
    _userId: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    _balanceId: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    _categoryId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        require: true
    },
    notes: {
        type: String
    },
    createAt: {
        type: Date
    }
});


module.exports = mongoose.model('Transaction', transactionSchema);