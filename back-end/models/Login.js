import mongoose from "mongoose";


const loginschema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    skills:{type:[String],default:[]},
    phone_num:Number
})

export const Login = mongoose.model('Login', loginschema, 'logins'); // Force 'logins'

