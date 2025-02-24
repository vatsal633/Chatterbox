import express from 'express'
import { Login } from './models/Login.js'
import mongoose from 'mongoose'
import 'dotenv/config'
const app = express()
const port = 3000

//using this middleware for json output
app.use(express.json())


// create connection from database and making the model 
const logindb = mongoose.createConnection('mongodb://localhost:27017/login')
const loginmodel = logindb.model("Login", Login.schema)



//this routes fetch all the users from database
app.get('/api/users', async(req, res) => {
  try {
    const users = await loginmodel.find(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
})


app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})