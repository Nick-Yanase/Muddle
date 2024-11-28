import AddTask from "./AddTask";
import Task from "./Task";
import TaskTitle from "./TaskTitle";

export default function TaskPage() {
  return(
    <div className="max-w-screen-lg w-full p-4 h-screen">
      <TaskTitle/>
      <AddTask/>
    </div>
  )
}