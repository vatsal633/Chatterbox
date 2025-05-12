import userLogin from "../model/userLogin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


export const signIn = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        if(!username || !email || !password){
            return res.status(401).json({message:"all feild are required"})
        }
    
        let existingUser = await userLogin.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userLogin({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userLogin.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,  
        );

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};
