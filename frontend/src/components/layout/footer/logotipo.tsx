import Image from "next/image"
import logotipo from "/public/images/logo.svg"
export default function Logotipo(){
  return(

    <div className="">
      <div className="relative overflow-hidden">
        <Image src={logotipo} alt="logotipo" width={200} height={100}/>
      </div>
      <span>
        {/* Muddle */}
      </span>
    </div>
  )
}