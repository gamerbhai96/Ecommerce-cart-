const mongoose=require('mongoose')

const cartSchema =mongoose.Schema({
    userId :String,
    item:[
    {
        productId:String,
        quantity :Number,
        name : String,
        price :String
    }
]
})
module.exports  = mongoose.model('Cart' , cartSchema)