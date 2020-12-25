const Category = require('../models/category.model')

module.exports = {
    getAll: (req, res) => {
        Category.find()
            .then((data) => {
                res.json(data);
            })
            .catch(errors => {
                res.json(errors);
            })
    },
    add: (req, res) => {
        Category.create({
            name: req.body.name,
            type: req.body.type,
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
    }    ,
    getOne: (req, res) => {
        Category.findOne({ _id: req.params.id })
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
        Category.findOneAndUpdate({ _id: req.params.id }, {
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
        Category.findOneAndDelete({ _id: req.params.id })
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
        Category.deleteMany()
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