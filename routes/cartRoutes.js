const express=require('express')
const { addTOCart, getCart, removeFromCart } = require('../controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware')

const cartrouter = express.Router()

cartrouter.post("/add",authMiddleware,addTOCart)
cartrouter.get("/",authMiddleware,getCart)
cartrouter.post("/remove",authMiddleware,removeFromCart)

module.exports = cartrouter