import express from 'express';
import { Login } from '../models/Login.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config()


//get api for fetch data from database
router.get('/user/:username', async (req, res) => {
    try {
        const username = req.params.username.trim().toLowerCase();
        // console.log("Searching for user:", username);

        const user = await Login.findOne({ name: { $regex: new RegExp(`^${username}$`, 'i') } });

        //just for debugging
        // console.log(" Query Result:", user);

        if (!user) {
            console.log(" User not found in database");
            return res.status(404).json({ message: 'User not found' });
        }

        // console.log(" User found:", user);
        res.json(user);
    } catch (err) {
        console.error(" Server error:", err);
        res.status(500).json({ message: 'Server Error', error: err });
    }
});

//post api for register user to database
router.post('/register', async (req, res) => {
    try {

        const { name, email, password } = req.body;
        console.log(" Registering user:", name);

        const existing_user = await Login.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } }); // Case-insensitive search

        if (existing_user) {
            console.log(" User already exists");
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new Login({ name, email, password });
        await newUser.save();
    } catch (err) {
        console.error(" Server error:", err);
        res.status(500).json({ message: 'Server Error', error: err });
    }
})

//update password routes
router.put('/update-password', async (req, res) => {
    try {
        const { email, oldpassword, newpassword } = req.body

        if (!email || !oldpassword || !newpassword) {
            return res.status(400).json({ message: "All fields are required" })
        }

        //finding user by email form database
        const user = await Login.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }


        if (user.password !== oldpassword) {
            return res.status(400).json({ message: "Incorrect old password" });
        }

        user.password = newpassword
        await user.save()

        res.json({ message: "Password updated successfully" })

    } catch (err) {
        console.error("Server error:", err);
        res.status(500).json({ message: "Server Error", error: err })
    }
})


router.post('/add-skill', async (req, res) => {
    try {
        const { username, skills } = req.body


        console.log("Adding skill for user:", username);
        console.log(skills)

        if (skills == null) {
            return res.status(400).json({ message: "Skills cannot be empty" })
        }

        if (!username || !skills || skills.length === 0) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const user = await Login.findOne({ name: username })

        if (!user) {
            console.log("user not found")
        }
        else {
            console.log("User found:", user);


            // Update skills correctly
            user.skills = skills;  // No need to reassign an empty array before setting
            await user.save();

            res.status(200).json({ message: "✅ Skills saved successfully!" });
        }

    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err })
    }
})


router.put('/update-name', async (req, res) => {
    try {

        const { name, email } = req.body

        let user = await Login.findOne({ name: name })

        if (user) {
            user.name = name
            user.email = email
            await user.save()

            res.status(200).json({ message: "username and email update successfully" })
        }
    } catch (err) {
        console.log("error while updating data");
        res.status(500).json({ message: "facing some error while updating the data" })
    }
})


router.post('/add-phone', async (req, res) => {
    try {
        const { name, Phonenum } = req.body;

        let user = await Login.findOne({ name });

           
        if (!user) {
            return res.status(404).send(`${name} user not found`);
        }

        else{
            user.phone_num = Phonenum;
            await user.save();
            
            res.status(200).json({ message: "Phone number updated successfully" });
        }
    } catch (err) {
        res.status(500).json({ message: "Facing some issue while saving mobile data" });
    }
});



export default router;
