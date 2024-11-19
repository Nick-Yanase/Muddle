import Image from 'next/image'
import logoTask from './public/images/LogoTask.svg'
import editDuotone from './public/images/editDuotone.svg'

export default function TaskTitle() {
  return(
    <div className="flex items-start gap-4">
      <div className="w-6 h-6">
        <Image
          src={logoTask}
          alt="logo-task"
          fill
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1>My Task Board</h1>
        <p>Tasks to keep organized</p>
      </div>
      <button>
        <Image 
          src={editDuotone}
          alt="edit-button"
          fill
          objectFit="cover"
        /> 
      </button>
    </div>
  )
}