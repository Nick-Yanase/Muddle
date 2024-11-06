import Image from "next/image";
import flow from '/public/images/illustration-flowing-conversation.svg'

export default function FlowConverse() {
  return(
    <section className="flex items-center justify-center max-w-screen-xl w-full h-[600px] p-4 shadow-lg rounded-lg">
      <div className="flex items-center justify-between p-10 w-11/12">
        <div className="relative w-5/12 h-[350px]">
          <Image
            src={flow}
            alt="together-image"
            fill
            objectFit="cover"
          />
        </div>
        <div className="w-5/12">
          <h2 className="text-3xl font-bold text-cyan50 mb-4">Flowing Conversations</h2>
          <p className="text-cyan30">You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
        </div>
      </div>
    </section>
  )
}