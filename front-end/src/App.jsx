import { useState } from 'react'
import reactlogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// componets
import Navbar from './components/navbar'
import Home from "./components/home"
import Login from './components/login'
import Signin from './components/signin'
import navbar from './components/navbar'
import AboutUs from './components/aboutus'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Home/></>
    },
    {
      path:'/login',
      element:<><Navbar/><Login/></>
    },

    {
      path:'/signin',
      element:<><Navbar/><Signin/></>
    },

    {
      path:'/aboutus',
      element:<><Navbar/><AboutUs/></>
    }
  ])
  return (
    <>
      <RouterProvider router={router}>
   <Home/>
   <Navbar/>
   
      </RouterProvider>
    </>
  )
}

export default App
