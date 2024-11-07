import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    productImage: {
        type: String, //waise image ko yahan bhi store kra skte hai buffer format mein but it is better ki cloud mein store krade and then usse url asa a string leke yahan se dede
    },
    price: {
        type: Number,
        default : 0
    },
    stock: {
        type: Number,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required : true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
},{timestamps: true})

export const Product = mongoose.model("Product",productSchema)