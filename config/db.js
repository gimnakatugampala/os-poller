const mongoose = require('mongoose')

// global connect
mongoose.Promise = global.Promise

// Mongoose connect
mongoose.connect('mongodb+srv://Gimna:9922557gimna@nodetuts.qlhc3.mongodb.net/pusherpoll?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log('MongoDb Connected'))
.catch(err => console.log(err))