import React from 'react'
import {
    TrashIcon,
    PencilSquareIcon,
    PlusIcon,
} from "@heroicons/react/24/outline";
import {motion} from "framer-motion"
import { deleteTask } from '../services/taskApi';
import { Link, useNavigate } from 'react-router-dom';
const Task = ({ task }) => {
    const navigate = useNavigate()
    return (
        <motion.div whileHover={{ scale: 1.01 }} className={`flex justify-between items-center px-5 py-2 w-4/5 mx-auto bg-gray-100 my-4 `}>
            <div>
                <h1 className={`text-xl ${task.completed ? 'line-through text-gray-500' : ''}`}>{task.name}</h1>
                <p className={`text-gray-600 ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.description}</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <button onClick={()=>deleteTask(task._id,navigate)}><TrashIcon className='w-6 text-gray-500 hover:text-red-500'/></button>
                <Link to={`/edit/${task._id}`} ><PencilSquareIcon className='w-6 text-gray-500 hover:text-blue-500'/></Link>
            </div>
        </motion.div>
    )
}

export default Task