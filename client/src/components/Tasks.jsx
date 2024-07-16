import React from 'react'
import Task from './Task'

const Tasks = ({data}) => {
 
  return (
    <div>
        {data.map((task)=>{
            return(
                <Task key={task._id} task={task} />
            )
        })}

    </div>
  )
}

export default Tasks