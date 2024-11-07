import Header from "./header";
import Footer from "./footer/Footer";
import React from "react";

export interface MainPageProps {
  className?: string;
  children: React.ReactNode;
}
export default function Layout(props: MainPageProps){
  return(
    <div className="flex flex-col">
      <Header/>
      <main className={`w-full flex flex-col items-center justify-center ${props.className ?? ``}`}>
        {props.children}
      </main>
      <Footer/>
    </div>
  )
}