import { Avatar } from "@mui/material";
import React ,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/authApi";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user)
    const handleLogout = () => {
        logout(navigate, dispatch)
    }
    const handleProfile = () => {
        setIsOpen(!isOpen)
    }


    return (
        <header className="py-5 bg-gray-100">
            <nav className="flex justify-between items-center w-4/5 mx-auto">
                <div>
                    <Link className="text-semibold text-xl" to={"/"} >Tasks Manager</Link>
                </div>
                <div>
                    <ul className="flex justify-center items-center gap-10 font-light">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/task/add"}>Add Task</Link></li>
                    </ul>
                </div>
                <div className="relative">
                    <Avatar src="/profile.png" onClick={handleProfile} />
                    {
                        isOpen && (
                            <div className="bg-white rounded-lg shadow absolute z-50 px-5 py-4 right-0 flex flex-col items-start gap-4">
                            <p>{user?.email}</p>
                            <p>{user?.name}</p>
                                
                            <button className="flex justify-center gap-2 items-center hover:underline hover:text-red-500" onClick={handleLogout}>
                            <ArrowRightStartOnRectangleIcon className="w-6 text-red-500"/>
                            <span>Logout</span>
                            </button>
                        </div>
                        )
                    }

            </div>
        </nav>


        </header >
    )
}


export default Header