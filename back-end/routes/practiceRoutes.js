import express from 'express'
import dotenv from 'dotenv'
import {GoogleGenerativeAI} from '@google/generative-ai'
import readline from 'readline'
import router from './authRoutes'

const router = express.Router()


dotenv.config()
const GenAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
console.log(GenAI) 


export default router