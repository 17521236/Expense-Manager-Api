const mongoose = require('mongoose')
const uri = "mongodb+srv://admin:l4tsewzhLLCFZ0Mi@cluster0.zsn3f.gcp.mongodb.net/expense-manager?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongodb connected successfully...')
    })
    .catch((err) => {
        console.log('Mongo connected failed !!!');
        console.log('error: ',err);
    })


mongoose.set('useFindAndModify', false);