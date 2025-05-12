import express from "express"
import { login, signIn } from "../controllers/authContoller.js"

const router = express.Router()

router.post('/login',login)

router.post('/signin',signIn)


export default router