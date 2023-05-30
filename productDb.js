require('dotenv').config()
const connectMongoose = require('./db')
const product = require('./models/product')

const ProductJson = require('./ProductItem.json')

const start = async ()=>{
    try{
        await connectMongoose(process.env.Mongo_Url)
        await product.deleteMany()
        await product.create(ProductJson)
        console.log("success")
    }
    catch(error){
        console.log(error)
    }
}
start();