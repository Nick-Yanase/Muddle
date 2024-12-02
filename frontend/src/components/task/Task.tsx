import Image from "next/image"

interface TasksProps {
  icon: string,
  title: string,
  status?: string,
  background: string,
}

export default function Task({icon, title, status, background}: TasksProps) {
  return(
    <div className="flex items-center justify-between p-4 ">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg">
          <div className="relative w-6 h-6">
            <Image 
              src={icon}
              alt="icon-task"
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <div className="w-6 h-6 rounded-lg">
        <img className="w-full h-full" src={status} alt="icon-status" />
      </div>
    </div>
  )
}