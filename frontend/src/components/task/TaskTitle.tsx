import Image from 'next/image'
import logoTask from '/public/images/LogoTask.svg'
import editDuotone from '/public/images/Edit_duotone.svg'

export default function TaskTitle() {
  return(
    <div className="flex items-start gap-6 mb-12">
      <div className="relative w-[60px] h-[60px]">
        <Image
          src={logoTask}
          alt="logo-task"
          fill
          // objectFit="cover"
          style={{ objectFit: 'contain'}}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl text-">My Task Board</h1>
        <p>Tasks to keep organized</p>
      </div>
      <button className="relative w-[30px] h-[30px] mt-2">
        <Image 
          src={editDuotone}
          alt="edit-button"
          fill
          style={{ objectFit: 'contain'}}
        /> 
      </button>
    </div>
  )
}