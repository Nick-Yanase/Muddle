import Header from "./header";
import Footer from "./footer/Footer";
import React from "react";

export interface MainPageProps {
  className?: string;
  children: React.ReactNode;
}
export default function Layout({className, children}: MainPageProps){
  return(
    <div className="flex flex-col bg-iceWhite">
      <Header/>
      <main className={`w-full flex gap-10 flex-col items-center justify-center relative ${className ?? ``}`}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}