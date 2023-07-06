const mongoose = require('mongoose')

const connectMongoose = async (uri) =>{
   await mongoose.connect(uri,()=>{
        console.log("Connected to database safely")
    })
}

module.exports = connectMongoose;