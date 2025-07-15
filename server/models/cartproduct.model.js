import mongoose from "mongoose";

const cartProductSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: "product"
    },
    quantity: {
        type: Number,
        default: 1
    },
    userId : {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
}, { timestamps: true } )

const CartProductModel = mongoose.model("User", cartProductSchema);

export default CartProductModel;