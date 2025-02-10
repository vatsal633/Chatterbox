import { useState } from 'react'
import reactlogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'

// componets
import Navbar from './components/navbar'
import Header from "./components/header"
import Login from './components/login'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Header/>
    },
    {
      path:'/login',
      element:<Login/>
    }
  ])
  return (
    <>
      <Navbar/>
      <Header/>
    </>
  )
}

export default App
