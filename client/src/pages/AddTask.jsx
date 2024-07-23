import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { taskSchema } from '../validations/taskSchema'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { createTask } from '../services/taskApi'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AddTask = ({ isEditing }) => {
    const navigate = useNavigate();
    
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: async (data) => {
            try {
                const validatedData = await taskSchema.parse(data);
                return {
                    values: validatedData,
                    errors: {},
                }
            } catch (error) {
                console.log("error validating: ", error)
                return {
                    values: {},
                    errors: error.errors.reduce((prev, curr) => {
                        // console.log(`An Error in ${curr.path} where ${curr.message}`)
                        return { ...prev, [curr.path[0]]: curr.message };
                    }, {}),
                }
            }
        }
    })
    const onSubmit = (data) => {
        createTask(data,navigate)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex jsutify-center flex-col w-1/2 mx-auto gap-3 mt-10'>
            <h1 className='mb-5 text-2xl '>Enter The Task</h1>
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

            {isEditing &&
                <div>
                    <FormControlLabel
                        control={
                            <Controller
                                name="completed"
                                control={control}

                                render={({ field }) => <Checkbox {...field} />}
                            />
                        }
                        label="Completed"
                    />
                </div>
            }
            <div>


            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
            </div>
        </form>
    )
}

export default AddTask