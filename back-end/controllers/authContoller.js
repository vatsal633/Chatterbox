import userLogin from "../model/userLogin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


export const signIn = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        if (!username || !email || !password) {
            return res.status(401).json({ message: "all feild are required" })
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

export const updatePassword = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await userLogin.findOne({ email })

        if (!existingUser) {
            res.status(404).json({ message: "user not found" })
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        existingUser.password == password
        await existingUser.save();
        res.status(200).json({ message: "password updated successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "server error while updating password" })
    }
}

// Update Username
export const updateUsername = async (req, res) => {
    const { email, newUsername } = req.body;

    if (!email || !newUsername) {
        return res.status(400).json({ message: "Email and new username are required." });
    }

    try {
        const user = await userLogin.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        user.username = newUsername;
        await user.save();

        res.status(200).json({ message: "Username updated successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error while updating username." });
    }
};

// Update Email
export const updateEmail = async (req, res) => {
    const { currentEmail, newEmail } = req.body;

    if (!currentEmail || !newEmail) {
        return res.status(400).json({ message: "Current and new email are required." });
    }

    try {
        const existingUser = await userLogin.findOne({ email: currentEmail });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found." });
        }

        const emailTaken = await userLogin.findOne({ email: newEmail });
        if (emailTaken) {
            return res.status(400).json({ message: "New email is already registered with another account." });
        }

        existingUser.email = newEmail;
        await existingUser.save();

        res.status(200).json({ message: "Email updated successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error while updating email." });
    }
};


export const updateProfilePic = async (req, res) => {
    const { email, imageUrl } = req.body;

    if (!email || !imageUrl) {
        return res.status(400).json({ message: "Email and image URL are required" });
    }

    try {
        const user = await userLogin.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.profilePic = imageUrl;
        await user.save();

        res.status(200).json({ message: "Profile picture updated successfully", profilePic: imageUrl });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error while updating profile picture" });
    }
};

export const updateBio = async (req, res) => {
  const { email, bio } = req.body;

  if (!email || !bio) {
    return res.status(400).json({ message: "Email and bio are required" });
  }

  try {
    const user = await userLogin.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.bio = bio;
    await user.save();

    res.status(200).json({ message: "Bio updated successfully", bio });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while updating bio" });
  }
};