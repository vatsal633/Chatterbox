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
import Blog from './components/blog'
import CoursePage from './components/courses'
import Dashboard from './pages/dashboard'
import Footer from './components/footer'
import Forget_pass from "./pages/forget_pass"

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Home/><Footer/></>
    },
    {
      path:'/login',
      element:<><Navbar/><Login/><Footer/></>
    },

    {
      path:'/signin',
      element:<><Navbar/><Signin/><Footer/></>
    },

    {
      path:'/aboutus',
      element:<><Navbar/><AboutUs/><Footer/></>
    },
    {
      path:'/courses',
      element:<><Navbar/><CoursePage/><Footer/></>
    },

    {
      path:"/blog",
      element:<><Navbar/><Blog/><Footer/></>
    },

    {
      path:"/dashboard",
      element:<><Dashboard/><Footer/></>
    },

    {
      path:'/forgerpass',
      element:<><Forget_pass/></>
    }
  ])
  return (
    <>
      <RouterProvider router={router}>
   <Home/>
   <Navbar/>
   <Footer/>
   
      </RouterProvider>
    </>
  )
}

export default App
