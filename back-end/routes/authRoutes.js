import express from 'express';
import { Login } from '../models/Login.js';

const router = express.Router();

//get the for fetch data from database
router.get('/user/:username', async (req, res) => {
    try {
        const username = req.params.username.trim().toLowerCase();
        console.log("Searching for user:", username);

        const user = await Login.findOne({ name: { $regex: new RegExp(`^${username}$`, 'i') } }); // Case-insensitive search

        console.log(" Query Result:", user);

        if (!user) {
            console.log(" User not found in database");
            return res.status(404).json({ message: 'User not found' });
        }

        console.log(" User found:", user);
        res.json(user);
    } catch (err) {
        console.error(" Server error:", err);
        res.status(500).json({ message: 'Server Error', error: err });
    }
});

router.post('/register', async (req, res) => {

})





export default router;
