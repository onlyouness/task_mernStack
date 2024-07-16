
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import EditTask from "../pages/EditTask";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/task/add",
        element:<AddTask/>
    },
    {
        path:"/edit/:id",
        element:<EditTask/>
    }
])