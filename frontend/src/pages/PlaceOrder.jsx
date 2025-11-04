import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const PlaceOrder = () => {

  const { navigate, backendUrl, cartItems, token, setCartItems, getCartAmount, deliveryCharge, products } = useContext(ShopContext)
  const [method, setMethod] = useState("cod")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
    country: "",
    phone: "",
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value

    setFormData(data => ({ ...data, [name]: value }))

  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliveryCharge
      }

      switch (method) {
        // api calls for cod
        case "COD":
          const response = await axios.post(backendUrl + "/api/order/place")
          break;
        default:
          break;

    }


    } catch (error) {

  }
}

return (
  <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 mih-h-[80vh] border-t'>
    <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
      <div className='text-xl sm:text-2xl my-3'>
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
      </div>
      <div className='flex gap-3'>
        <input onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' required />
        <input onChange={onChangeHandler} name="lastName" value={formData.lastName} className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' required />
      </div>
      <input onChange={onChangeHandler} name="email" value={formData.email} className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' required />
      <input onChange={onChangeHandler} name="street" value={formData.street} className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' required />
      <div className='flex gap-3'>
        <input onChange={onChangeHandler} name="city" value={formData.city} className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' required />
        <input onChange={onChangeHandler} name="state" value={formData.state} className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' required />
      </div>
      <div className='flex gap-3'>
        <input onChange={onChangeHandler} name="zipcode" value={formData.zipcode} className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' required />
        <input onChange={onChangeHandler} name="country" value={formData.country} className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' required />
      </div>
      <input onChange={onChangeHandler} name="phone" value={formData.phone} className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' required />
    </div>

    {/* right side */}

    <div nonce='mt-8'>
      <div className='mt-8 min-w-80'>
        <CartTotal />
      </div>
      <div className='mt-12'>
        <Title text1={"PAYMENT"} text2={"METHOD"} />
        <div className='flex gap-3 flex-col lg:flex-row'>
          <div onClick={() => setMethod("stripe")} className='flex items-center gap-3 px-3 cursor-pointer border p-2'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
            <img src={assets.stripe_logo} alt="" className='h-5 mx-4' />
          </div>
          <div onClick={() => setMethod("razorpay")} className='flex items-center gap-3 px-3 cursor-pointer border p-2'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
            <img src={assets.razorpay_logo} alt="" className='h-5 mx-4' />
          </div>
          <div onClick={() => setMethod("cod")} className='flex items-center gap-3 px-3 cursor-pointer border p-2'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
            <p className='text-gray-500 text-sm font-medium mx-4'>Cash on delivery</p>
          </div>
        </div>

        <div className='w-full text-end mt-8'>
          <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
        </div>

      </div>
    </div>
  </form>
)
}

export default PlaceOrder
