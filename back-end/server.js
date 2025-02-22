import express from 'express'
import { Login } from './models/Login.js'
import mongoose from 'mongoose'
const app = express()
const port = 3000

//using this middleware for json output
app.use(express.json())


// create connection and making the model 
const logindb = mongoose.createConnection('mongodb://localhost:27017/login')
const loginmodel = logindb.model("Login", Login.schema)



// different routs 
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/signin', async (req, res) => {
  const new_login = new loginmodel({ name: "brinda", email: "brind@gmail.com", password: "brinda123" })

  await new_login.save()
  res.send("success")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})