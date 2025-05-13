import express from "express"
import authenticationJWT from "../middleware/authMiddleware.js"
import { login, signIn, updateBio, updateEmail, updatePassword, updateProfilePic, updateUsername } from "../controllers/authContoller.js"

const router = express.Router()

router.post('/login',login)
router.post('/signin',signIn)
router.put('/update-username',authenticationJWT,updateUsername)
router.put('/update-email',authenticationJWT,updateEmail)
router.put('/update-password',authenticationJWT,updatePassword)
router.put('/update-profilePic',authenticationJWT,updateProfilePic)
router.put('/update-bio',updateBio)

export default router