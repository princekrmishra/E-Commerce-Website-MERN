import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    address_line: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    avatar: {
        type: String,
        default: ""
    },
})