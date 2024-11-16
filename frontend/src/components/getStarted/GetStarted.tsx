import Btn from "../btn";

export default function GetStarted() {
  return(
    <div className="flex w-1/2 h-60 flex-col items-center justify-center gap-10 mb-24 -translate-y-full bg-white rounded-lg absolute">
      <h2 className="text-cyan50 text-3xl font-bold ">Ready To Build Your Community?</h2>
      <Btn variant="primary" size="default">
        Get Started For Free
      </Btn>
    </div>
  )
}