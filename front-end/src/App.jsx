import { useState } from 'react'
import reactlogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// componets
import Navbar from './components/navbar'
import Home from "./pages/home"
import Login from './pages/login'
import Signin from './pages/signin'
import AboutUs from './pages/aboutus'
import Blog from './pages/blog'
import CoursePage from './pages/courses'
import Dashboard from './pages/dashboard'
import Footer from './components/footer'
import Forget_pass from "./pages/forget_pass"
import Change_password from './pages/change_password'
import Settings from './pages/settings'
import Profile from './pages/profile'

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
    },
    {
      path:'/settings',
      element:<><Settings/></>
    },
    {
      path:'/profile',
      element:<><Profile/></>
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
