export default function ContactWays() {
  return(
    <div className="flex flex-col justify-between gap-3 w-3/5">
      <div className="flex items-start gap-2">
        <img src="/images/icon-location.svg" alt="location" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi repudiandae cumque et.</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="/images/icon-phone.svg" alt="tel" />
        <p>xxxxxxxxxxx</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="/images/icon-email.svg" alt="email" />
        <p>opa@gmail.com</p>
      </div>
    </div>
  )
  
}