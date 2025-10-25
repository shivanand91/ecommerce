import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './context/ShopContext.jsx'
import {ToastContainer} from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
      <ToastContainer />
    </ShopContextProvider>
  </BrowserRouter>
)
