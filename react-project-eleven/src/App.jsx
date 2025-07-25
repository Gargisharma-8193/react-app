import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';

import Dashboard from './components/Dashboard';
import About from './components/About';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
        <Navbar />
        <Home />

      </div>
    },
    {
      path:"/about",
      element:<div>
        <Navbar />
        <About />

      </div>

    },
    
    {
      path:"/dashboard",
      element:<div>
        <Navbar />
        <Dashboard />

      </div>,
      //Nestes route
      children:[
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'mock-test',
          element:<MockTest/>
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
    },

    {
      path:"/student/:id",
      element:
      <div>
         <Navbar />
        <ParamComp />

      </div>
    },

    {
      path:'*',
      element:<NotFound/>
    }
    
  ]
);


function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
