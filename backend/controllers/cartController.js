import productModel from "../models/productModel.js"


// add products to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body
        
        

    } catch (error) {
        
    }
}
// update user cart
const updateCart = async (req, res) => {

}
// add user cart data
const getUserCart = async (req, res) => {

}

export {addToCart, updateCart, getUserCart}