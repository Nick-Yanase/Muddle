"use client"
import FlowConverse from "@/components/flowConverse/FlowConverse";
import GrowToghether from "@/components/growTogether/GrowTogether,";
import Layout from "@/components/layout/layout";
import YourUsers from "@/components/yourUsers/YourUsers";
import Image from "next/image";

import imgFunc from "/public/images/img-funcionalidade.png"
import imgFunc2 from "/public/images/img-funcionalidade-2.png"

import { useState } from "react";

interface ArrayImgs {
  img1: string,
  img2: string
}

export default function Home() {

  const [isClicked, setIsClicked] = useState(false)
  const [img, setImg] = useState([] as ArrayImgs[])

  const aaa = [
    img1: "/public/images/img-funcionalidade.png",
    "/public/images/img-funcionalidade-2.png"
  ]



  return (
    <Layout>
      <section className="max-w-screen-xl w-full h-[600px]">
        <div className="flex w-full h-full justify-start ">
          <div className="flex flex-col p-6 justify-around">
            <button onClick={() => setIsClicked(!isClicked)} className={`flex w-96 h-30 rounded-lg border-l-8  overflow-hidden ${isClicked ? 'border-yellow20 bg-white shadow-xl' : ''}`}>
              <div className="flex flex-col p-4 gap-2">
                <p className="text-start text-cyan50">Adicionar Tarefas</p>
                <p className="text-start text-cyan30">A funcionalidade de adicionar tarefa permite que os usuários insiram novas atividades no quadro de tarefas, facilitando a organização e o gerenciamento do fluxo de trabalho.</p>
              </div>
            </button>
            <button onClick={() => setIsClicked(!isClicked)} className={`flex w-96 h-30 rounded-lg border-l-8  overflow-hidden ${isClicked ? 'border-yellow20 bg-white shadow-xl' : ''}`}>
              <div className="flex flex-col p-4 gap-2">
                <p className="text-start text-cyan50">Editar Tarefas</p>
                <p className="text-start text-cyan30">Ao clicar no botão "Add new task", o usuário pode inserir informações relevantes, como título da tarefa, descrição e status. Isso possibilita que a nova tarefa seja exibida no quadro, oferecendo uma visão clara e organizada do progresso das atividades.</p>
              </div>
            </button>
          </div>
          <div className="w-full relative">
            {aaa.map((element) => {
              if(isClicked == true) {
                return (
                  <Image 
                    src={element.img1}
                    alt="img-funcinalidade"
                    fill
                    objectFit="cover"
                  />
                )
              }
            })}
          </div>
          {/* <div className="w-full relative">
            <Image 
              src={imgFunc}
              alt="img-funcinalidade"
              fill
              objectFit="cover"
            />
          </div> */}
        </div>
      </section>
      <FlowConverse/>
      <GrowToghether/>
      <YourUsers/>
    </Layout>
  );
}
