require('dotenv').config()

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.ccz2twj.mongodb.net/tradenpost?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlParser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
    console.log(err)
})

