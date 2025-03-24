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
app.use(cors({
  origin: ["https://your-vercel-frontend.vercel.app"], // Replace with actual frontend URL
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

// Connect to Login Database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { console.log("login database connected") })
  .catch((err) => { console.log("error while connecting login database", err) })


// Routes
app.use('/api/auth', authRoutes);
app.use('/states', userstatistics);
app.use('/recent', recentact)
app.use('/api', skillsroute);

// Default Route
app.get('/', (req, res) => {
  res.send('Hello World! from codeQuest');
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
