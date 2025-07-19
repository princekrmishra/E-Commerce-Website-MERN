import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
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