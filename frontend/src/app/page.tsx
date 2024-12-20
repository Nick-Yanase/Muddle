"use client"
import FlowConverse from "@/components/flowConverse/FlowConverse";
import GrowToghether from "@/components/growTogether/GrowTogether,";
import Layout from "@/components/layout/layout";
import YourUsers from "@/components/yourUsers/YourUsers";
import Image from "next/image";

import imgFunc from "/public/images/img-funcionalidade.png"
import imgFunc2 from "/public/images/img-funcionalidade-2.png"

import { useState } from "react";

export default function Home() {

  const [isClicked, setIsClicked] = useState(0)

  function renderImage() {
    if(isClicked == 1){
      return(
        <Image 
          src={imgFunc}
          alt="img-funcinalidade"
          fill
          objectFit="cover"
        />
      )
    } else if(isClicked == 2){
      return(
        <Image 
          src={imgFunc2}
          alt="img-funcinalidade"
          fill
          objectFit="cover"
        />
      )
    }
    return 
  }

  return (
    <Layout>
      <section className="max-w-screen-xl w-full h-[600px]">
        <div className="flex w-full h-full justify-start ">
          <div className="flex flex-col p-6 justify-around">
            <button onClick={() => setIsClicked(1)} className={`flex w-96 h-30 rounded-lg border-l-8 overflow-hidden ${isClicked == 1 ? 'border-yellow20 bg-white shadow-xl' : ''}`}>
              <div className="flex flex-col p-4 gap-2">
                <p className="text-start text-cyan50">Adicionar Tarefas</p>
                <p className="text-start text-cyan30">A funcionalidade de adicionar tarefa permite que os usuários insiram novas atividades no quadro de tarefas, facilitando a organização e o gerenciamento do fluxo de trabalho.</p>
              </div>
            </button>
            <button onClick={() => setIsClicked(2)} className={`flex w-96 h-30 rounded-lg border-l-8  overflow-hidden ${isClicked == 2 ? 'border-yellow20 bg-white shadow-xl' : ''}`}>
              <div className="flex flex-col p-4 gap-2">
                <p className="text-start text-cyan50">Editar Tarefas</p>
                <p className="text-start text-cyan30">Ao clicar no botão "Add new task", o usuário pode inserir informações relevantes, como título da tarefa, descrição e status. Isso possibilita que a nova tarefa seja exibida no quadro, oferecendo uma visão clara e organizada do progresso das atividades.</p>
              </div>
            </button>
          </div>
          <div className="w-full relative">
            {renderImage()}
          </div>
        </div>
      </section>
      <FlowConverse/>
      <GrowToghether/>
      <YourUsers/>
    </Layout>
  );
}
