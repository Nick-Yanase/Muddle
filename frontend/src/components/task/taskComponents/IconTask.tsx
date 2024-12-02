import Image from "next/image"

interface IconTaskProps {
  link: string
}

export default function IconTask({link}: IconTaskProps){
  return(
    <button className="w-10 h-10 relative bg-gray10 rounded-lg">
      <Image 
        src={link}
        alt="icon-task"
        fill
        objectFit="cover"
      />
    </button>
  )
}