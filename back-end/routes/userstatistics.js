import express from 'express'
import { userStates } from '../models/userStates.js'
const router = express.Router()


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


export default router