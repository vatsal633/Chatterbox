import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import userstatistics from './routes/userstatistics.js';
import recentact from './routes/recentactRoutes.js';
import skillsroute from './routes/skiilsroutes.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Login Database
// const logindb = mongoose.createConnection(process.env.MONGO_URI || 'mongodb://localhost:27017/login', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// Routes
app.use('/api/auth', authRoutes);
app.use('/states', userstatistics);
app.use('/recent',recentact)
app.use('/api',skillsroute);

// Default Route
app.get('/', (req, res) => {
  res.send('Hello World! from codeQuest');
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
