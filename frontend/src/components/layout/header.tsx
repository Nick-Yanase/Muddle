'use client'

import Link from "next/link";
import Btn from "../btn";
import Logotipo from "./footer/logotipo";

export default function Header() {
 
  return (
    <header className="w-full h-20 flex justify-center items-center mb-10">
      <nav className="w-full max-w-screen-xl p-4 flex justify-between items-center">
        <Logotipo />
        <div className="flex gap-4">
           <Link href={"/register" } className=" px-6 py-3 flex items-center justify-center bg-pink rounded-3xl text-white ">cadastrar</Link>
          <Btn variant="secondary" size="default">
            Try It Free
          </Btn>
        </div>
      </nav>
    </header>
  );
}
