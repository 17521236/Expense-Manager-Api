const Transaction = require('../models/transaction.model')

module.exports = {
    getAll: (req, res) => {
        Transaction.find()
            .then((data) => {
                res.json(data);
            })
            .catch(errors => {
                res.json(errors);
            })
    },
    add: (req, res) => {
        Transaction.create({
            _userId: req.body._userId,
            _balanceId: req.body._balanceId,
            _categoryId: req.body._categoryId,
            amount: req.body.amount,
            time: req.body.time,
            notes: req.body.notes,
            createAt: new Date()
        }).then(data => {
            res.send({
                result: '1',
                data
            })
        }).catch(errors => {
            res.send({
                result: '0',
                errors
            })
        })
    }
}