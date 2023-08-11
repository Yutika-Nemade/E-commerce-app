import mongoose from "mongoose";
// import { type } from './../node_modules/@types/whatwg-url/index.d';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    question:{
        type: String,
        required: true, 
    },
    role:{
        type: Number,
        default: 0
    }
},{timestamps:true})

export default mongoose.model('users', userSchema)