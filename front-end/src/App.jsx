import { useState } from 'react'
import reactlogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// componets
import Navbar from './components/navbar'
import Header from "./components/header"
import Login from './components/login'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Header/></>
    },
    {
      path:'/login',
      element:<><Navbar/><Login/></>
    }
  ])
  return (
    <>
      <RouterProvider router={router}>
   <Header/>
   <Navbar/>

      </RouterProvider>
    </>
  )
}

export default App
