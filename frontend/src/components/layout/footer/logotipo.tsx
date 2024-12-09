import Image from "next/image"
import logotipo from "/public/images/LogoTask.svg"
export default function Logotipo(){
  return(

    <div className="flex items-center gap-6">
      <div className="relative overflow-hidden">
        <Image src={logotipo} alt="logotipo" width={80} height={80}/>
      </div>
      <span className="font-bold text-4xl">
        Muddle
      </span>
    </div>
  )
}