import { useState } from 'react'
import reactlogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import './App.css'


import Navbar from './components/navbar'
import Header from "./components/header"
import Login from './components/login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
    </>
  )
}

export default App
