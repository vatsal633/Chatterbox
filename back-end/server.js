import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Login Database
// mongoose.connect(process.env.MONGO_URI ||'mongodb://localhost:27017/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => { console.log("login database connected") })
//   .catch((err) => { console.log("error while connecting login database", err) })


// Routes


// Default Route
app.get('/', (req, res) => {
  res.send('Hello World! from Chatterbox');
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
