import { useState } from 'react'
import Home from './pages/Home'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'


function App() {

  return (
    <>
    <RouterProvider router={router} />


    </>
  )
}

export default App
