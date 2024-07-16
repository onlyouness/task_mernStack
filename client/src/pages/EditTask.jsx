import React, { useEffect, useState } from 'react'
import { getTask, updateTask } from '../services/taskApi'
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Loading from '../components/Loading'
import { useForm, Controller } from 'react-hook-form'
import { editSchema } from '../validations/editSchema'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

const EditTask = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [task, setTask] = useState({});
    const { handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: zodResolver(editSchema),
        defaultValues: {
            name: '',
            description: '',
            completed: false,
        },
    })
    useEffect(() => {
        const fetchData = async ()=>{
            try {
                await getTask(id,setTask)
                reset(task)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        setTimeout(fetchData,2000)

        // getTask(id, setTask)
        // console.log("task:", task)
        // reset(task)
        // setIsLoading(false)
    }, [id,reset,isLoading])
    console.log("tas fetched", task)

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("data", data)
        updateTask(id, data, navigate)
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex jsutify-center flex-col w-1/2 mx-auto gap-3 mt-10'>
                <h1 className='mb-5 text-2xl '>Edit The Task</h1>
                <div>
                    <Controller
                        name='name'
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Task Name"
                                error={errors.name}
                                helperText={errors.name}
                                fullWidth
                            />
                        )}
                    />

                </div>

                <div>
                    <Controller
                        name='description'
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Task Description"
                                error={!!errors.description}
                                helperText={errors.description}
                                fullWidth
                            />
                        )}
                    />

                </div>
                <div>
                    <FormControlLabel
                        control={
                            <Controller
                                name="completed"
                                control={control}


                                render={({ field }) => <Checkbox {...field} checked={field.value}/>}
                            />
                        }
                        label="Completed"
                    />
                </div>
                <div>


                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </div>
            </form>


        </div>
    )
}

export default EditTask