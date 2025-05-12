import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import authRoute from "./routes/authRoute.js"
import connectDB from  "./config/db.js"


dotenv.config();

const app = express();
connectDB()
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());



// Routes
app.use("/api/auth",authRoute)

// Default Route
app.get('/', (req, res) => {
  res.send('Hello World! from Chatterbox');
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
