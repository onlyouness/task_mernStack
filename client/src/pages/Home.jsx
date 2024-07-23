import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import { getTasks } from '../services/taskApi'
import Loading from '../components/Loading'
import { Toaster } from 'react-hot-toast'
import Tasks from '../components/Tasks'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
              
                <div className='mt-10'>
                    {data.length > 0 ? 
                    <Tasks isEditing={isEditing} data={data}/>
                        : <p className='text-xl'>No Tasks Yet <Link to={"/task/add"} className='text-lg underline hover:no-underline hover:text-gray-700'> Add a Task</Link></p>
                }
                </div>

            </div>
        </>
    )
}

export default Home