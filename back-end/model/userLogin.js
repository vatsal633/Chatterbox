import mongoose from "mongoose"

const userLoginSchema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  pic: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  bio:{
    type:String,
    default:""
  }
})

const userLogin = mongoose.model("userlogin", userLoginSchema)
export default userLogin