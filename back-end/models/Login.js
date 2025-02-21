import mongoose from "mongoose";


const loginschema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

export const Login = mongoose.model('login',loginschema) 