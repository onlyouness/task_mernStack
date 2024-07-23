import axios from 'axios'
const BASE_URL = "http://127.0.0.1:5000/api/v1/tasks"
import {toast} from "react-hot-toast" 

const createTask = async (data,navigate) =>{
    try {
        const res = await axios.post(`${BASE_URL}/`,data,{
            withCredentials: true // Include credentials (cookies) in the request
          })
        navigate("/")
        toast.success(res.data.status)
    } catch (error) {
        console.log("error ",error)
        toast.success(error.message)
    }
}
const getTasks = async (setData) =>{
    try {
        const res = await axios.get(`${BASE_URL}/`,{ withCredentials: true })
        setData(res.data.tasks)
        
    } catch (error) {
        console.log("error ",error)
    }
}
const getTask = async (id,setTask) =>{
    try {
        const res = await axios.get(`${BASE_URL}/${id}`,{
            withCredentials: true // Include credentials (cookies) in the request
          })
        setTask(res.data.task)
        
    } catch (error) {
        console.log("error ",error)
    }
}
const deleteTask = async(id,navigate)=>{
    try {
        const res = await axios.delete(`${BASE_URL}/${id}`,{
            withCredentials: true 
          })
        toast.success(res.data.status)
        navigate(0)
        
    } catch (error) {
        console.log("error ",error)
        toast.error(error.response.data.message)
    }
}
const updateTask = async(id,data,navigate)=>{
    try {
        const res = await axios.patch(`${BASE_URL}/${id}`,data,{
            withCredentials: true // Include credentials (cookies) in the request
          })
        toast.success(res.data.status)
        navigate("/")
    } catch (error) {
        console.log("error ",error)
    }
}

export {createTask,getTasks,deleteTask,getTask,updateTask}