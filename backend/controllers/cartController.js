import userModel from "../models/userModel.js"

// add products to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body
        console.log(userId, itemId, size);

        if (!userId || !itemId || !size) {
            return res.status(400).json({ success: false, message: "Missing required fields" })
        }

        const userData = await userModel.findById(userId)
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        let cartData = userData.cartData || {}

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId, { cartData })
        

        return res.json({success: true, message: "Added to cart"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: error.message})
    }
}

// update user cart
const updateCart = async (req, res) => {

    try {

        const { userId, itemId, size, quantity } = req.body
        console.log(userId, itemId, size, quantity);

        if (!userId || !itemId || !size || typeof quantity !== "number") {
            return res.status(400).json({ success: false, message: "Missing or invalid fields" })
        }
        
        const userData = await userModel.findById(userId)
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        let cartData = userData.cartData || {}

        if (!cartData[itemId]) cartData[itemId] = {}

        if (quantity > 0) {
            cartData[itemId][size] = quantity
        } else {
            delete cartData[itemId][size]
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId]
            }
        }

        await userModel.findByIdAndUpdate(userId, {cartData}, { new: true })
        return res.json({success: true, message: "Cart Updated"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: error.message})
    }

}

// add user cart data
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body
        console.log(userId);

        if (!userId) {
            return res.status(400).json({ success: false, message: "Missing userId" })
        }
        
        const userData = await userModel.findById(userId)
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        let cartData = userData.cartData || {}
        return res.json({ success: true, cartData })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: error.message})
    }
}

export {addToCart, updateCart, getUserCart}