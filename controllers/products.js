// localhost:5000/api/product?name=OnePlus
const Product = require('../models/product')

const getAllProducts = async (req,res) =>{

    const { company ,name,sort,select,page,limit} = req.query
    const queryObject = {}
    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex:name,$option:'i'};
    }

    let apiData = Product.find(queryObject)

    if(sort){
        let sortFix = sort.split(",").join(" ")
        apiData = apiData.sort(sortFix)
    }

    if(select){
        let selectFix = select.split(",").join(" ")
        apiData = apiData.select(selectFix)
    }

    let webpage = page || 1
    let weblimit = limit || 1

    let skip = (webpage - 1) * weblimit


    const data = await apiData.skip(skip).limit(weblimit)
    res.status(200).json(data)
}

const getAllProductsTesting = async (req,res) =>{
    res.status(200).json({msg:"I am from Products Testing"})
}

module.exports = {getAllProducts,getAllProductsTesting}