import axios from 'axios'
const BASE_URL = "http://127.0.0.1:5000/api/v1/tasks"
import {toast} from "react-hot-toast" 

const createTask = async (data,navigate) =>{
    try {
        const res = await axios.post(`${BASE_URL}/`,data)
        navigate("/")
        toast.success(res.data.status)
    } catch (error) {
        console.log("error ",error)
        toast.success(error.message)
    }
}
const getTasks = async (setData) =>{
    try {
        const res = await axios.get(`${BASE_URL}/`)
        setData(res.data.tasks)
        
    } catch (error) {
        console.log("error ",error)
    }
}
const getTask = async (id,setTask) =>{
    try {
        const res = await axios.get(`${BASE_URL}/${id}`)
        setTask(res.data.task)
        
    } catch (error) {
        console.log("error ",error)
    }
}
const deleteTask = async(id)=>{
    console.log(id)
    try {
        const res = await axios.delete(`${BASE_URL}/${id}`)
        toast.success(res.data.status)
        
    } catch (error) {
        console.log("error ",error)
    }
}
const updateTask = async(id,data,navigate)=>{
    try {
        const res = await axios.patch(`${BASE_URL}/${id}`,data)
        toast.success(res.data.status)
        navigate("/")
    } catch (error) {
        console.log("error ",error)
    }
}

export {createTask,getTasks,deleteTask,getTask,updateTask}