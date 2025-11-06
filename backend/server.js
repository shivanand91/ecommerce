import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// App config
const app = express()
const port = process.env.PORT || 3000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints

app.use("/api/user", userRouter) // user
app.use("/api/product", productRouter) // product
app.use("/api/cart", cartRouter) // cart 
app.use("/api/order", orderRouter) // order

app.get("/", (req, res) => {
    res.send("API Working") 
})

// start server

app.listen(port, () => {
    console.log(`Server started on PORT ${port}`);
    
})