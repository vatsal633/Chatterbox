import express from 'express';
import { Login } from '../models/Login.js';

const router = express.Router();

//get api for fetch data from database
router.get('/user/:username', async (req, res) => {
    try {
        const username = req.params.username.trim().toLowerCase();
        console.log("Searching for user:", username);

        const user = await Login.findOne({ name: { $regex: new RegExp(`^${username}$`, 'i') } });
                   
        //just for debugging
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

//post api for register user to database
router.post('/register', async (req, res) => {
    try{

        const { name, email, password } = req.body;
        console.log(" Registering user:", name);
        
        const existing_user = await Login.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } }); // Case-insensitive search
        
        if(existing_user){
            console.log(" User already exists");
            return res.status(400).json({ message: 'User already exists' });
        }
        
        const newUser = new Login({ name, email, password });
        await newUser.save();
    }catch(err){
        console.error(" Server error:", err);
        res.status(500).json({ message: 'Server Error', error: err });
    }   
})

//update password routes
router.put('/update-password', async (req, res) => {
    try{
        const {email,oldpassword,newpassword} = req.body
        
        if(!email || !oldpassword || !newpassword){
            return res.status(400).json({message:"All fields are required"})
        }
        
        //finding user by email form database
        const user = await Login.findOne({email})
        
        if(!user){
            return res.status(404).json({message:"User not found"})
        }


        if(user.password!== oldpassword){
            return res.status(400).json({ message: "Incorrect old password" });
        }

        user.password = newpassword
        await user.save()

        res.json({message:"Password updated successfully"})

    }catch(err){
        onsole.error("Server error:", err);
        res.status(500).json({message:"Server Error",error:err})
    }
})


router.post('/add-skill',async(req,res)=>{
    try{
        const {username,skills} = req.body

        let name = username

        console.log("Adding skill for user:", name);
        console.log(skills)

        if(skills == null){
            return res.status(400).json({message:"Skills cannot be empty"})
        }

        if(!name || !skills || skills.length===0){
            return res.status(400).json({message:"All fields are required"})
        }

        const user = await Login.findOne({name})
        console.log("User found:", user);

        if(user.skills==null){
            user.skills.push(...skills);
            await user.save()
     
        }else{
            user.skills = []
            user.skills = skills
            await user.save()
        }

        res.json({message:"Skills saved successfully!"})
        
    }catch(err){
        res.status(500).json({message:"Server Error",error:err})
    }
})


export default router;
