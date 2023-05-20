import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import AllToys from "../Pages/allToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/addAToy/AddAToy";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        
        {
            path:'/alltoys',
            element:<AllToys></AllToys>
        },
        {
            path:'/mytoys',
            element:<MyToys></MyToys>
        },
        {
            path:'/addatoy',
            element:<AddAToy></AddAToy>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
     
    },
    {
        path:'*',
        element:<About></About>
    },
  ]);
  export default router;