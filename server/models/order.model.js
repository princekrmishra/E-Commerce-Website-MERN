import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userId : {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    orderId: {
        type: String,
        required: [true, 'Provide orderId '],
        unique: true
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: "product"
    },
    product_details: {
        name: String,
        image: Array,
    },
    paymentId: {
        type: String,
        default: ""
    },
    payment_status: {
        type: String,
        default: ""
    },
    delivery_address : {
        type: mongoose.Schema.ObjectId,
        ref: "address"
    },
    subTotalAmt : {
        type: Number,
        default: 0
    },
    TotalAmt : {
        type: Number,
        default: 0
    },
}, { timestamps: true } )

const OrderModel = mongoose.model("User", orderSchema);

export default OrderModel;