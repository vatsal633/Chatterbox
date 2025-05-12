import mongoose, { modelNames } from "mongoose"

const userLoginSchema = mongoose.Schema({
    username:String,
    email: { type: String, unique: true },
    password:String
})

const userLogin = mongoose.model("userlogin",userLoginSchema)
export default userLogin