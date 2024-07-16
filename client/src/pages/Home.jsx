import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import { getTasks } from '../services/taskApi'
import Loading from '../components/Loading'
import { Toaster } from 'react-hot-toast'
import Tasks from '../components/Tasks'
import { Link } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    useEffect(() => {
        const fetchData = async ()=>{
            try {
                await getTasks(setData)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        setTimeout(fetchData,2000)
        
    }, [])
    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <Toaster/>
            <div className='w-1/2 mx-auto my-5'>
                <div className='flex justify-between items-center'>
                    <p className={`text-bleu-800 text-2xl font-semibold`} >Tasks Manager</p>
                    <Link to={"/task/add"} className='rounded-lg px-3 py-2 bg-blue-600 text-white hover:bg-blue-500'>Add Task</Link>
                </div>
                <div className='mt-10'>
                    <Tasks isEditing={isEditing} data={data}/>
                </div>

            </div>
        </>
    )
}

export default Home