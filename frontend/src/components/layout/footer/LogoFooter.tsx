import Image from 'next/image'
import logoFooter from '/public/images/LogoFooter.svg'

export default function LogoFooter() {
  return(
    <div className="flex items-center gap-6">  
      <div className="w-20 h-20 relative">
        <Image src={logoFooter} alt='logo-footer' fill style={{objectFit: 'contain'}}/>
      </div>
      <span className="text-white text-4xl font-bold ">Muddle</span>
    </div>
  )
}