"use client"

import Image from 'next/image'
import iconAddTask from "/public/images/add_round_duotone.svg"
import { useState } from 'react'

import IconTask from './taskComponents/IconTask'
import iconCloseBtn from "/public/images/close_ring_duotone-1.svg"
import StatusTask from './taskComponents/StatusTask'
import iconSave from "/public/images/Done_round.svg"
import iconDelete from "/public/images/Trash.svg"
import statusProgress from "/public/images/Time_atack_duotone.svg"
import statusComplete from "/public/images/Done_round_duotone.svg"
import statusIncomplete from "/public/images/close_ring_duotone.svg"

export default function AddTask() {

  const [taskTitle, setTaskTitle] = useState("")
  const [tasks, setTasks] = useState<string[]>([])
  const [editTask, setEditTask] = useState(false)
  console.log(editTask)

  // const handleAddTaskBtn = () => {

  //   setEditTask(!editTask)
  //   console.log(tasks)

  // }

  return(
    <section>
      <button onClick={() => setEditTask(!editTask)} className="flex w-full h-20 items-center justify-start p-4 rounded-lg bg-slate-600 pointer gap-4 ">
        <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-red-900">
          <div className="relative w-5 h-5 ">
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

        {editTask &&
          <div className="flex flex-col justify-between w-1/2 h-[90%] bg-gray-300 absolute right-6 top-6 rounded-lg py-6 px-8">
            <div className="flex w-full gap-6 flex-col">
              <div className="flex justify-between itens-center">
                <p className="text-bold">Task Details</p>
                <button className="flex items-center justify-center border-gray10">
                  <div className="w-5 h-5 relative">
                    <Image
                      src={iconCloseBtn}
                      alt="icon-close"
                      fill
                      objectFit="cover"
                    />  
                  </div>
                </button>
              </div>
              {/* <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..."></input> */}
              <div className="flex-col">
                <label className="text-gray10 text-sm" htmlFor="">Task Name</label>
                <input className="w-full h-8 bg-none p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-AzulReal" type="text" placeholder="Enter a task title"/>
              </div>

              <div>
                <label className="text-gray10 text-sm" htmlFor="">Description</label>
                <input className="w-full h-24 bg-none p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-AzulReal " type="text" placeholder="Enter a short description"/>
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
              <button className="flex items-center gap-2 px-4 py-2 bg-realBlue rounded-full text-white text-sm">
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
          </div>
        }
    </section>
    
  )
}