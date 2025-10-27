import express from "express"
import cors from "cors"
import "dotenv/config"

// App config
const app = express()
const port = process.env.PORT || 3000

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.get("/", (req, res) => {
    res.send("API Working")
})

// start server

app.listen(port, () => {
    console.log(`Server started on PORT ${port}`);
    
})

// npm i mongoose dotenv express jsonwebtoken multer nodemn razorpay stripe validator cloudinary bcrypt