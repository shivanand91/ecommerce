import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("DB Connected");
        })

        await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`)
    } catch (error) {
        console.log("Error while connecting with DB", error);

    }
}

export default connectDB;