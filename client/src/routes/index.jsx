
import { createBrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import EditTask from "../pages/EditTask";
import Login from "../pages/Login"
import Register from "../pages/Register";
import PrivateRoute from "../components/PrivateRoute";
import Layout from "./Layout";

export const router = createBrowserRouter([
    
{
    element:<Layout/>,
    children:[
        {
            path:"/",
            element:<PrivateRoute><Home/></PrivateRoute> ,
        },
        {
            path:"/task/add",
            element:<AddTask/>
        },
        {
            path:"/edit/:id",
            element:<EditTask/>
        }
       
    ]
},
{
    path:"/login",
    element:<Login/>
},
{
    path:"/register",
    element:<Register/>
}

])