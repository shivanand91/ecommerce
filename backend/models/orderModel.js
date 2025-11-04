import mongoose, { Schema } from "mongoose"

const orderSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    amount: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Ordered Placed'
    },
    paymentMethod: {
        type: String,
        required: true
    },
    payment: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Number,
        required: true
    }
})


const orderModel = mongoose.models.order || mongoose.model("order", orderSchema)
export default orderModel