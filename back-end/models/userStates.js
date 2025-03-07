import mongoose from "mongoose";


const statesschema = mongoose.Schema({
    username:String,
    solved_question:{type:Number,default:0}
})

export const userStates = mongoose.model('userstatistics',statesschema)