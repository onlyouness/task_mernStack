import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { createTask } from '../services/taskApi'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginShema } from '../validations/loginShema'
import { login } from '../services/authApi'
import { Toaster } from 'react-hot-toast'
import { useDispatch ,useSelector} from 'react-redux'


const Login = () => {
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const { handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: zodResolver(loginShema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })
    const onSubmit = (data) => {
        console.log(data)
        login(data,dispatch,navigate)
    }
    return (
        <div>
            <Toaster/>
            <form onSubmit={handleSubmit(onSubmit)} className='flex jsutify-center flex-col w-1/2 mx-auto gap-3 mt-10'>
                <h1 className='mb-5 text-2xl '>Welcome Back, Login</h1>
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
                    <p>Didn't Have An Account! <Link className='underline' to={"/register"}>Sign Up</Link> </p>
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

export default Login