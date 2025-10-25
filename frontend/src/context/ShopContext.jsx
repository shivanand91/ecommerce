import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "₹";
    const deliveryCharge = 50;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Please select the size before adding the product into cart page.", {position: "bottom-right"})
        }
        else {
            toast.success("Product successfully added to the cart.", {position: "bottom-right"})
        }
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        } 
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    }

   
    const getCartCount = () => {
        let totalCount = 0;

        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if(cartItems[items])
                } catch (error) {
                    
                }
            }
        }
    }

    const value = {
       products, currency, deliveryCharge, search, setSearch, showSearch, setShowSearch, cartItems, addToCart
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;