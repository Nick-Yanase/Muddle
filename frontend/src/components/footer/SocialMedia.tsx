import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";


export default function SocialMedia() {
  return(
    <div className="flex flex-col justify-between">
      <div className="flex gap-3 items-center">
          <a href="/" className="flex items-center justify-center size-9 border-[2px] border-white rounded-full transition-all hover:text-pink hover:border-pink "><IconBrandFacebook /></a>
          <a href="" className="flex items-center justify-center size-9 border-[2px] border-white rounded-full transition-all hover:text-pink hover:border-pink"><IconBrandX/></a>
          <a href="" className="flex items-center justify-center size-9 border-[2px] border-white rounded-full transition-all hover:text-pink hover:border-pink"><IconBrandInstagram/></a>
        </div>
        <p>copyrightaaaaaa</p>
    </div>
  )
}