import Image from "next/image";
import together from '/public/images/illustration-grow-together.svg'

export default function GrowToghether() {
  return(
    <section className="flex items-center justify-center max-w-screen-xl w-full h-[600px] p-4 shadow-lg rounded-lg">
      <div className="flex items-center justify-between p-10 w-11/12">
        <div className="w-5/12">
          <h2 className="text-3xl font-bold text-cyan50 mb-4">Grow Together</h2>
          <p className="text-cyan30">Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you iss out on with a feedback form.</p>
        </div>
        <div className="relative w-5/12 h-[350px]">
          <Image
            src={together}
            alt="together-image"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}