const Cart = require('../models/cart')
 exports.addTOCart =async(req,res)=>{
    const {productId,name,price}=req.body
    if(!productId) return res.status(400).json({message:"Product ID is missing"})

        let cart = await Cart.findOne({userID:req.user.id})
        if(!cart){
            cart= new Cart({userID:req.user.id,items:[]})

        }
        const existingitem = cart.item.find((item)=> item.productId && item.productId.toString()=== productId.toString())

        if(existingitem){
            existingitem.quantity++
        }
        else{
            cart.item.push({productId,name,price})
        }
        
        await cart.save()
        res.json({cart,message:"item added to cart"})
 }

exports.getCart = async(req,res)=>{
    const cart =await Cart.findOne({userID:req.user.id})
    res.json(cart? cart.item:[])
}


 exports.removeFromCart = async(req,res)=>{
    let cart= await cart.findOne({userID:req.user.id})
    if(!cart) return res.status(401).json({message:"cart not found"})

        cart.item = cart.item.filter((item)=> item.productId !== productId)
        await cart.save()
        res.json({cart,message:"item removed from cart"})
 }