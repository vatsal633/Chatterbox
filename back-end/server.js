import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import userstatistics from './routes/userstatistics.js';

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

// Default Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
