import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import Navbar from './components/navbar';
import Home from "./pages/home";
import Login from './components/auth/login';
import Signin from './components/auth/signin';
import AboutUs from './pages/aboutus';
import Blog from './pages/blog';
import CoursePage from './pages/courses';
import Dashboard from './pages/dashboard';
import Footer from './components/footer';
import Forget_pass from "./pages/forget_pass";
import Settings from './pages/settings';
import Profile from './pages/profile';
import Practice from './pages/practice';
import Languagepage from './pages/languages/languagepage';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <Home />
      <Footer />
    </>
  },
  {
    path: '/login',
    element: <>
      <Navbar />
      <Login />
      <Footer />
    </>
  },
  {
    path: '/signin',
    element: <>
      <Navbar />
      <Signin />
      <Footer />
    </>
  },
  {
    path: '/aboutus',
    element: <>
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  },
  {
    path: '/courses',
    element: <>
      <Navbar />
      <CoursePage />
      <Footer />
    </>
  },
  {
    path: "/blog",
    element: <>
      <Navbar />
      <Blog />
      <Footer />
    </>
  },
  {
    path: '/forgerpass',
    element: <Forget_pass />
  },

  // Protected Routes
  {
    path: "/:username/dashboard",
    element: <><Dashboard /></>
  },
  {
    path: "/:username/settings",
    element: <><Settings /></>
  },
  {
    path: "/:username/profile",
    element: <><Profile /></>
  },
  {
    path: "/practice",
    element: <><Practice /></>
  },
  {
    path: "/practice/:language",
    element: <><Languagepage /></>
  }
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
