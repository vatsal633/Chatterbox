import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import Home from "./pages/home";
import Navbar from './components/navbar';
import About from './pages/about';
import Login from './pages/login';
import Signin from './pages/signin';

const router = createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Home/></>
  },
  {
    path:'/about',
    element:<><Navbar/><About/></>
  },
  {
    path:"/login",
    element:<><Navbar/><Login/></>
  },
  {
    path:"/signin",
    element:<><Navbar/><Signin/></>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
