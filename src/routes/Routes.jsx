import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import AllToys from "../Pages/allToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/addAToy/AddAToy";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/register/Register";
import SingleToyViewDetails from "../Pages/singleToyViewDetails/SingleToyViewDetails";
import PrivateRoute from "./PrivateRoute";
import UpdatedToy from "../Pages/UpdateToy/UpdatedToy";

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
            path:'/alltoys/:id',
            element:<PrivateRoute><SingleToyViewDetails></SingleToyViewDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://assignment-11-math-worms-server.vercel.app/allToys/${params.id}`)
        },
        {
            path:'/mytoys',
            element:<MyToys></MyToys>
        },
        {
            path:'/addtoys',
            element:<AddAToy></AddAToy>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:"/addtoys/:id",
            element:<UpdatedToy></UpdatedToy>,
            loader:({params})=>fetch(`https://assignment-11-math-worms-server.vercel.app/addtoys/${params.id}`)
          }
      ]
     
    },
    {
        path:'*',
        element:<About></About>
    },
  ]);
  export default router;