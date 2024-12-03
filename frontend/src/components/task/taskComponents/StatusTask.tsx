import Image from "next/image";

interface StatusTaskProps {
  link: string
  status: string
  bgColor: string
}

export default function StatusTask({link, status, bgColor}: StatusTaskProps){
  return(
    <button className="flex justify-between items-center px-2 py-2 w-[45%] h-12 rounded-lg border-2 border-gray10">
      <div className="flex items-center gap-4">
        <div className={`flex justify-center items-center p-2 rounded-lg ${bgColor}`}>
          <div className="w-5 h-5 bg-orange relative">
            <Image 
              src={link}
              alt="icon-status"
              fill
              objectFit="cover"
              
            />
          </div>
        </div>
        <p>{status}</p>
      </div>
      <div className="w-4 h-4 bg-blue-700"></div>
    </button>
  )
}