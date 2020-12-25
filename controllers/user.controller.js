const User = require('../models/user.model')
const md5 = require('md5')
var nodemailer = require('nodemailer');
const random = require('random');

module.exports = {
    getAll: (req, res) => {
        User.find()
            .then((data) => {
                res.json(data);
            })
            .catch(errors => {
                res.json(errors);
            })
    },
    add: async (req, res) => {


        var userNew = await User.find({ email: req.body.email });
        if (userNew[0]) {
            res.json({
                result: '0',
                message: 'The email has already been used for another account'
            })
            return;
        }


        await User.create({
            email: req.body.email,
            password: md5(req.body.password),
            createAt: new Date()
        }).then(data => {
            res.json({
                result: '1',
                data
            })
        }).catch(errors => {
            res.json({
                result: '0',
                errors
            })
        })
    },
    getOne: (req, res) => {
        User.findOne({ _id: req.params.id })
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
        User.findOneAndUpdate({ _id: req.params.id }, {
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
        User.findOneAndDelete({ _id: req.params.id })
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
        User.deleteMany()
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
    forgotPassword: (req, res) => {

        let code = random.int(100000, 999999);

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'xave.em.00@gmail.com',
                pass: 'tung1999'
            }
        });

        var mailOptions = {
            from: 'xave.em.00@gmail.com',
            to: req.body.email,
            subject: 'Mã xác thực',
            text: `Đây là mã xác thực của bạn: ${code}`
        };

        transporter.sendMail(mailOptions, (errors, info) => {
            if (errors) {
                res.json({
                    result: '0',
                    errors
                })
            } else {
                res.json({
                    result: '1',
                    data: info.response,
                    code
                })
            }
        });
    },
    login: async (req, res) => {
        let user = await User.find({email:req.body.email});
        console.log(user);
        if (!user[0]) {
            res.json({
                result: '0',
                message: 'User not exist'
            })
            return;
        }
        if (md5(req.body.password) != user[0].password) {
            res.json({
                result: '0',
                message: 'Password wrong '
            })
            return;
        }

        res.json({
            result: '1',
            data: user[0]
        })
    }


}