import mongoose from "mongoose"

const skillSchema = mongoose.Schema({
  username:String,
  skills:{type:[String],default:[null]}  
})


export const skillsmodel = mongoose.model("skilldb",skillSchema)