import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";


export default function SocialMedia() {
  return(
    <div className="flex flex-col justify-between">
      <div className="flex gap-3 items-center">
          <a href="/" className="flex items-center justify-center size-9 border border-white rounded-full hover:text-slate-900 hover:border-bl"><IconBrandFacebook /></a>
          <a href="" className="hover:text-slate-900"><IconBrandX/></a>
          <a href="" className="hover:text-slate-900"><IconBrandInstagram/></a>
        </div>
        <p>copyrightaaaaaa</p>
    </div>
  )
}