import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'

const app = express()
const port = process.env.PORT || 3000 // Fixing the port issue

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/auth', authRoutes)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/login', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(' Database connected'))
.catch((err) => console.error(' Error connecting to database:', err))

// Default Route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start Server
app.listen(port, () => {
  console.log(` Server running on port ${port}`)
})
