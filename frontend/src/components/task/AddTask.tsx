"use client"

import Image from 'next/image'
import iconAddTask from "/public/images/add_round_duotone.svg"
import { FormEvent, useState } from 'react'

import IconTask from './taskComponents/IconTask'
import iconCloseBtn from "/public/images/close_ring_duotone-1.svg"
import StatusTask from './taskComponents/StatusTask'
import iconSave from "/public/images/Done_round.svg"
import iconDelete from "/public/images/Trash.svg"
import statusProgress from "/public/images/Time_atack_duotone.svg"
import statusComplete from "/public/images/Done_round_duotone.svg"
import statusIncomplete from "/public/images/close_ring_duotone.svg"

interface Tasks {
  id: number,
  // icon: string,
  taskName: string,
  taskDesc: string,
  // status: string,
  checkbox: boolean
}

export default function AddTask() {

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDesc, setTaskDesc] = useState("")
  const [checkbox, setCheckbox] = useState(false)
  const [tasks, setTasks] = useState([] as Tasks[])
  const [editTask, setEditTask] = useState(false)
  // console.log(editTask)

  // const handleAddTaskBtn = () => {

  //   setEditTask(!editTask)
  //   console.log(tasks)

  // }
  const closeEditTask = () => {
    setEditTask(false)
  }

  const handleClickSave = (event: FormEvent) => {
    event.preventDefault()

    if(taskTitle.length <= 3) {
      alert("O título da task precisa ter mais que 3 caracteres")
      return
    }

    const newTask = [
      ...tasks,
      {
        id: new Date().getTime(),
        taskName: taskTitle,
        taskDesc: taskDesc,
        checkbox: checkbox
      }
    ]
    setTasks(newTask)

    console.log(newTask)

  }

  return(
    <section>
      <button onClick={() => setEditTask(!editTask)} className="flex w-full h-20 items-center justify-start p-4 rounded-lg pointer gap-4 bg-beige10">
        <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-orange20">
          <div className="relative w-5 h-5 ">
            <Image 
              src={iconAddTask}
              alt='icon-add-task'
              fill
              // objectFit='cover'
              style={{ objectFit: "contain"}}
            />
          </div>
        </div>
        <span className="font-semibold">Add New Task</span>
      </button>

      <ul className="flex flex-col gap-8 h-full mt-20">
        {tasks.map((tasks) => {
          return(
            <li key={tasks.id} className="flex w-full h-20 items-center justify-between rounded-lg bg-red-500">
              <div className="flex items-center gap-6">
                <div className="">
                  {/* <Image

                  /> */}
                </div>
                <label>{tasks.taskName}</label>
              </div>
            </li>
          )
        })}
      </ul>

      
        {editTask &&
          <div className="flex flex-col justify-between w-1/2 h-[90%] bg-gray-300 absolute right-6 top-6 rounded-lg py-6 px-8 ">
            <form onSubmit={ handleClickSave } className="flex w-full gap-8 flex-col">
              <div className="flex justify-between itens-center">
                <p className="text-bold">Task Details</p>
                <button className="flex items-center justify-center border-gray10">
                  <div onClick={ closeEditTask } className="w-6 h-6 relative">
                    <Image
                      src={iconCloseBtn}
                      alt="icon-close"
                      fill
                      objectFit="cover"
                    />  
                  </div>
                </button>
              </div>
              
                <div className="flex-col">
                  <label className="text-gray10 text-sm" htmlFor="">Task Name</label>
                  <input className="w-full h-8 bg-none p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-AzulReal" type="text" placeholder="Enter a task title"
                    value={taskTitle}
                    onChange={(event) => setTaskTitle(event.target.value)}
                  />
                </div>

                <div>
                  <label className="text-gray10 text-sm" htmlFor="">Description</label>
                  <textarea className="flex flex-wrap w-full text-start bg-none p-2 pb-24 rounded-lg focus:outline-none focus:ring-2 focus:ring-AzulReal " placeholder="Enter a short description"
                    value={taskDesc}
                    onChange={(event) => setTaskDesc(event.target.value)}
                  />
                </div>

              <div>
                <label className="text-gray10 text-sm" htmlFor="">icon</label>
                <div className="flex items-center gap-4">
                  <IconTask link={iconCloseBtn}/>
                  <IconTask link={iconCloseBtn}/>
                  <IconTask link={iconCloseBtn}/>
                  <IconTask link={iconCloseBtn}/>
                  <IconTask link={iconCloseBtn}/>
                  <IconTask link={iconCloseBtn}/>
                </div>
              </div>

              <div className="">
                <label className="text-gray10 text-sm " htmlFor="">Status</label>
                <div className="flex flex-wrap gap-4 justify-between">
                  <StatusTask link={statusProgress} status="In Progress" bgColor="bg-yellow20"/>
                  <StatusTask link={statusComplete} status="Completed" bgColor="bg-green20"/>
                  <StatusTask link={statusIncomplete} status="Won`t do" bgColor="bg-red20"/>
                </div>
              </div>

              <div className="flex items-center justify-end gap-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-cyan30 rounded-full text-white text-sm">
                  Delete
                  <div className="relative w-5 h-5">
                    <Image 
                      src={iconDelete}
                      alt="icon-close"
                      fill
                      objectFit="cover"
                    />
                  </div>
                </button>
                <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-realBlue rounded-full text-white text-sm">
                  Save
                  <div className="relative w-5 h-5">
                    <Image 
                      src={iconSave}
                      alt="icon-close"
                      fill
                      objectFit="cover"
                    />
                  </div>
                </button>
              </div>
            </form>
          </div>
        }
        
    </section>
    
  )
}