import express from 'express'
import {recent_act} from "../models/recent_act.js"
import mongoose from 'mongoose'

const router = express.Router();




//this req called when user generate question
router.post('/update-recentact',async(req,res)=>{
    try{

        const {username,language,topic} = req.body;
        
        let user = await recent_act.findOne({username})

        if(user){
            user.language = language
            user.topic = topic
            
            await user.save()
            console.log("database updated")
        }

        else{
            const new_user = new recent_act({username,language,topic})
            await new_user.save()
            res.status(200).json({messsage:"database created!"})
        }
        
        // const newuser = new recent_act({username,language,topic})
        // await newuser.save()
    }catch(err){
        console.log("error while connecting to database");
        res.status(500).json({message:"error while connecting to database"});
    }
})

router.get('/:username/get-recentact',async(req,res)=>{
    try{

        const {username} = req.params

        const user = await recent_act.findOne({username})

        if(user){
            res.status(200).json({data:user})
        }

        else{
            res.status(400).json({message:"usernot exist"})
        }

    }catch(err){
        res.status(500).json({message:"error while connecting to database"})
    }
})

export default router;