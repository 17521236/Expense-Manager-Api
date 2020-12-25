const Wallet = require('../models/wallet.model')

module.exports = {
    getAll: (req, res) => {
        Wallet.find()
            .then((data) => {
                res.json(data);
            })
            .catch(errors => {
                res.json(errors);
            })
    },
    add: (req, res) => {
        Wallet.create({
            name: req.body.name,
            amount: req.body.amount,
            _userId: req.body._userId,
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
        Wallet.findOne({ _id: req.params.id })
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
        Wallet.findOneAndUpdate({ _id: req.params.id }, {
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
        Wallet.findOneAndDelete({ _id: req.params.id })
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
        Wallet.deleteMany()
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