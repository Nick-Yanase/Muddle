import Btn from "../btn";

export default function GetStarted() {
  return(
    <div className="flex w-1/2 h-60 flex-col items-center justify-center gap-10 translate-y-1/4 bg-white rounded-lg z-10">
      <h2 className="text-cyan50 text-3xl font-bold ">Ready To Build Your Community?</h2>
      <Btn variant="primary" size="default">
        Get Started For Free
      </Btn>
    </div>
  )
}