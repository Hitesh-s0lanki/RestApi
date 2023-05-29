require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000
const connectMongoose = require('./db')

connectMongoose(process.env.Url);

app.get("/",(req,res)=>{
    res.send("Hello world")
});

app.use("/api/product",require("./routes/products"))

const start = async () =>{
    try{
        app.listen(PORT,() =>{
            console.log(`${PORT} Yes i m connected `)
        })
    }
    catch(error){
        console.log(error);
    }
}

start();