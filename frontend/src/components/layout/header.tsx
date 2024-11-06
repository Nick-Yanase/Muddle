import Btn from "../btn";
import Logotipo from "./footer/logotipo";

export default function Header() {
  return (
    <header className="w-full h-20 flex justify-center items-center">
      <nav className="w-full max-w-screen-xl p-4 flex justify-between items-center">
        <Logotipo />
        <Btn variant="secondary" size="default">
          Try It Free
        </Btn>
      </nav>
    </header>
  );
}
