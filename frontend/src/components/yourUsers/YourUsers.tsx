import Image from "next/image";
import users from '/public/images/illustration-your-users.svg'

export default function YourUsers() {
  return(
    <section className="flex items-center justify-center max-w-screen-xl w-full h-[600px] p-4 shadow-lg rounded-lg">
      <div className="flex items-center justify-between p-10 w-11/12">
        <div className="w-5/12">
          <h2 className="text-3xl font-bold text-cyan50 mb-4">Your Users</h2>
          <p className="text-cyan30">It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chating immediately.</p>
        </div>
        <div className="relative w-5/12 h-[350px]">
          <Image
            src={users}
            alt="together-image"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}