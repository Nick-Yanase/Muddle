import ContactWays from "./ContactWays";
import Links from "./Links";
import LogoFooter from "./LogoFooter";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return(
    <footer className="w-full bg-cyan50 text-white ">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-12">
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