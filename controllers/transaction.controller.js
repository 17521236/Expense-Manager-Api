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
            _balanceId: req.body._balanceId,
            amount: req.body.amount,
            _categoryId: req.body._categoryId,
            time: req.body.time,
            notes: req.body.notes,
            // imageUrl: req.body.imageUrl,
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
    },
    getOne: (req, res) => {
        Transaction.findOne({ _id: req.params.id })
            .then(data => {
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
    },
    update: (req, res) => {
        Transaction.findOneAndUpdate({ _id: req.params.id }, {
            $set: req.body
        })
            .then(data => {
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
    },
    delete: (req, res) => {
        Transaction.findOneAndDelete({ _id: req.params.id })
            .then(data => {
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
    },
    deleteAll: (req, res) => {
        Transaction.deleteMany()
            .then(data => {
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