const mongoose = require('mongoose')

// global connect
mongoose.Promise = global.Promise

// Mongoose connect
mongoose.connect('mongodb+srv://<username>:<password>@nodetuts.qlhc3.mongodb.net/pusherpoll?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log('MongoDb Connected'))
.catch(err => console.log(err))