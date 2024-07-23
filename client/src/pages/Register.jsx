import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { createTask } from '../services/taskApi'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginShema } from '../validations/loginShema'
import { login, register } from '../services/authApi'
import { Toaster } from 'react-hot-toast'
import { useDispatch ,useSelector} from 'react-redux'
import { registerSchema } from '../validations/registerSchema'


const Register = () => {
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const { handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })
    const onSubmit = (data) => {
        console.log(data)
        register(data,dispatch,navigate)
    }
    return (
        <div>
            <Toaster/>
            <form onSubmit={handleSubmit(onSubmit)} className='flex jsutify-center flex-col w-1/2 mx-auto gap-3 mt-10'>
                <h1 className='mb-5 text-2xl '>Enter Your Info To Register</h1>
                <div>
                    <Controller
                        name='name'
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="name"
                                error={errors.name}
                                helperText={errors.name}
                                fullWidth
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name='email'
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="email"
                                error={errors.email}
                                helperText={errors.email}
                                fullWidth
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name='password'
                        control={control}

                        render={({ field }) => (
                            <TextField
                                {...field}
                                type={'password'}
                                label="password"
                                error={errors.password}
                                helperText={errors.password}
                                fullWidth
                            />
                        )}
                    />
                </div>
                <div>
                    <p>Already Have an account! <Link className='underline' to={"/login"}>Login</Link> </p>
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

export default Register