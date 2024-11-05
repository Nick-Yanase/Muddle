import ContactWays from "./ContactWays";
import Links from "./Links";
import LogoFooter from "./LogoFooter";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return(
    <footer className="w-screen bg-darkCyan text-white ">
      <div className="w-4/5 h-2/5 mx-auto p-8">
        <LogoFooter />
        <div className="flex gap-8 w-full h-full">
          <ContactWays />
          <Links />
          <SocialMedia />
        </div>
      </div>
    </footer>
  )
}