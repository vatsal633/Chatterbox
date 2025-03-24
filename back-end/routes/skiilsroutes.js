import express from 'express'
import mongoose from 'mongoose'
import { skillsmodel } from '../models/skillsmodel.js'




const router = express.Router()

router.post('/addskill', async (req, res) => {
    try {
        const { username, skills } = req.body

        if (skills == null) {
            return res.status(400).json({ message: "Skills cannot be empty" })
        }

        if (!username || !skills || skills.length === 0) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const user = await skillsmodel.findOne({username })//find form database

        if (!user) {
            const newuser = new skillsmodel({username,skills}) 
            await newuser.save()
        }
        else {
            user.skills = skills
            await user.save();

            res.status(200).json({ message: "✅ Skills saved successfully!" });
        }

    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err })
    }

})


router.get('/:username/getskill',async(req,res)=>{
    try{
        const {username} = req.params
        
        let user = await skillsmodel.findOne({username})

        if(!user.skills){
           res.status(400).json({message:"no skill in db"})
        }

        else{
            let data = user.skills
            res.send(data) // Send skills as JSON response
            console.log(data)
        }

    }catch(err){
        res.status(500).json({message:"database connection error"})
    }
})


export default router