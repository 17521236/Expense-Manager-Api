const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// var cookieParser = require('cookie-parser')
const port = process.env.PORT || 3000;

const transactionRouter = require('./routes/transaction.route')
const userRouter = require('./routes/user.route')
const categoryRouter = require('./routes/category.route')
const walletRouter = require('./routes/wallet.route')

// const { login } = require('./middlewares/auth.middleware')

// load mongodb
const mongoose = require('./mongoose');

// load middleware
// app.use(cookieParser('ajskvhbjklksgahjklkaschjhkj46513sachjbknlm'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,PUT,PATCH,DELETE,GET,HEAD,OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// router here
app.get('/', (req, res) => {
    res.send('Home page ');
});

app.use('/api/transactions', transactionRouter);
app.use('/api/users', userRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/wallets', walletRouter);



// connection
app.listen(port, () => {
    console.log(`Port ${port} is running ...`)
})