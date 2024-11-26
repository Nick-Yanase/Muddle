"use client"

import Image from 'next/image'
import iconAddTask from "/public/images/add_round_duotone.svg"
import { useState } from 'react'

export default function AddTask() {

  const [taskTitle, setTaskTitle] = useState("")
  const [tasks, setTasks] = useState<string[]>([])
  const [editTask, setEditTask] = useState(false)
  console.log(editTask)

  const handleTasks = () => {
    setTasks([...tasks, task])
    console.log(tasks)


    setEditTask(!editTask)
  
  }

  if(editTask == true){
    {return(
      <div className="w-1/2 h-10/12 absolute bg-red-700">

      </div>
    )}
  }

  return(
    <button onClick={handleTasks} className="flex w-full h-20 items-center justify-start p-4 rounded-lg bg-slate-600 pointer gap-4 ">
      <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-red-900">
        <div className="relative w-6 h-6 ">
          <Image 
            src={iconAddTask}
            alt='icon-add-task'
            fill
            objectFit='cover'
          />
        </div>
      </div>
      <span className="font-semibold">Add New Task</span>
    </button>
    
  )
}