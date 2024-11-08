import ContactWays from "./ContactWays";
import Links from "./Links";
import LogoFooter from "./LogoFooter";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return(
    <footer className="flex items-center justify-centerw-full h-64 bg-cyan50 text-white">
      <div className="max-w-screen-xl w-full mx-auto p-4 font-">
        <LogoFooter />
        <div className="flex justify-between w-full h-full">
          <ContactWays />
          <Links />
          <SocialMedia />
        </div>
      </div>
    </footer>
  )
}