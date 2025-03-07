import express from 'express'
import { userStates } from '../models/userStates.js'
import mongoose from 'mongoose'
const router = express.Router()


//connect the mongodb
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/statistics', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{console.log("userstate connect")})
  .catch((err)=>{console.log("error while connection userstate database",err)})


//update states
router.post('/:username/update-states', async (req, res) => {
    try {
        const { username, solved_question } = req.body;

        // Update existing user stats or create a new one
        const updatedUser = await userStates.findOneAndUpdate(
            { username },  // Search for the user by username
            { $inc: { solved_question: solved_question || 1 } }, // Increment solved_question
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



export default router