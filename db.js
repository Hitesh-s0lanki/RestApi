const mongoose = require('mongoose')

const connectMongoose = (uri) =>{
    mongoose.connect(uri,()=>{
        console.log("Connected to database safely")
    })
}

module.exports = connectMongoose;