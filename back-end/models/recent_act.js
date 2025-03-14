import mongoose from 'mongoose'

const recentactSchema = mongoose.Schema({
    username:String,
    language:String,
    topic:String
})

export const recent_act = mongoose.model('recent',recentactSchema)