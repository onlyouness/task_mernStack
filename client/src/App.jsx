import { useEffect, useState } from 'react'
import Home from './pages/Home'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { setLogin } from './state/AuthSlice';
import { useDispatch } from 'react-redux';
import Header from './components/Header';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (user && token) {
      console.log(user,token)
        dispatch(setLogin({ user: JSON.parse(user), token }));
    }
}, [dispatch]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
