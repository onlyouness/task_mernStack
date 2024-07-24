import axios from 'axios'
const BASE_URL = "https://task-mern-stack.vercel.app/api/v1"
import { toast } from "react-hot-toast"
import { setLogin, setLogOut } from '../state/AuthSlice'

const login = async (data, dispatch, navigate) => {
    try {
        const res = await axios.post(`${BASE_URL}/login`, data, {
            withCredentials: true // Include credentials (cookies) in the request
        })
        console.log(res.data.token)
        dispatch(setLogin({ user: res.data.user, token: res.data.token }))
        navigate('/')

    } catch (error) {
        console.log("error ", error)
        toast.error(error.response.data.message)
    }
}
const register = async (data, dispatch, navigate) => {
    try {
        const res = await axios.post(`${BASE_URL}/register`, data,{
            withCredentials: true // Include credentials (cookies) in the request
          })
        dispatch(setLogin({ user: res.data.user, token: res.data.token }))
        navigate('/')
        toast.success(res.data.message)
    } catch (error) {
        console.log("error ", error.response.data)
        toast.error(error.response.data.message)
    }
}

const logout = async (navigate, dispatch) => {
    try {
        const res = await axios.post(`${BASE_URL}/logout`)
        dispatch(setLogOut())
        navigate("/login")
        toast.success(res.data.message)
    } catch (error) {
        console.log(error)
        // toast.error(error.response.data.message)
    }
}

export { login, register, logout }