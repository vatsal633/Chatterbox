import express from 'express'
import { Login } from './models/Login.js'
import mongoose from 'mongoose'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const logindb = mongoose.createConnection('mongodb://localhost:27017/login')

const loginmodel = logindb.model("Login", Login.schema)


app.use(express.json())



app.get('/signin', async (req, res) => {
  const new_login = new loginmodel({ name: "brinda", email: "brind@gmail.com", password: "brinda123" })

  await new_login.save()
  res.send("success")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})