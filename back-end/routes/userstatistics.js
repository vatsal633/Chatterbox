import express from 'express'
import { userStates } from '../models/userStates.js'
import mongoose from 'mongoose'
const router = express.Router()


//connect the mongodb



//update states
router.post('/:username/update-states', async (req, res) => {
    try {
        const { username, solved_question } = req.body;

        const user = await userStates.findOne({username})

        user.success_rate = (user.solved_question / user.attempted_question)*100; 

        await user.save()

        // Update existing user stats or create a new one
        const updatedUser = await userStates.findOneAndUpdate(
            { username },  // Search for the user by username
            { $inc: { solved_question: solved_question || 1 } },// Increment solved_question
            { upsert: true, new: true }  // Create if not exists, return updated doc
        );

        res.status(200).json({ message: `Statistics updated for ${username}`, data: updatedUser });


    } catch (err) {
        console.error(" Server Error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

//get stated data from database
router.get('/:username/get-states', async (req, res) => {
    try {
        const username = req.params.username;

        let user = await userStates.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: `No states found for ${username}` });
        }

        res.status(200).json(user);  // ✅ Send only one response
    } catch (err) {
        console.error('❌ Error while fetching states:', err);
        res.status(500).json({ message: "Server error" });
    }
});


router.post('/:username/update-attempt', async (req, res) => {
    try {
        const { username } = req.params;

        console.log(username)

        let user = await userStates.findOne({ username })

        //create database 
        if (!user) {
            const new_user = new userStates({ username: username, solved_question: 0, attempted_question: 1, success_rate: 0 })

            await new_user.save();
        }


        // //updating attempted quetion in existing user
        else {
            try {

                const existingUser = await userStates.findOne({ username })
                console.log("user found! you are ", existingUser);

                existingUser.attempted_question += 1;
                
                await existingUser.save()

                console.log("attempt update success")

            }catch(err){
                console.log("facing some issue while updating attempted")
                res.status(500).josn({message:"server error"})
            }
          
        }
    } catch (err) {
        res.send(500).json({ message: "server error" })
    }
});



export default router