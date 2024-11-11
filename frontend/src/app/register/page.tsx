import Btn from "@/components/btn";
import Logotipo from "@/components/layout/footer/logotipo";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Register(){
  const router = useRouter();
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const registrar = async () => {
    const res = await fetch("http:localhost:5000/api/auth/login", {
      method: 'POST',
      headers:{ "content-Type": "application/json"},
      body: JSON.stringify({email, senha})
    })
    console.log("dados cadastrados com sucesso")

    // const data = await res.json()
    // if(res.ok){
    //   return alert("Login efetuado com suecesso!")
    //   router.push("/todoList")
    // }
    // return alert(data.message || "erro ao logar")
  }
  
  return(
    <div className="w-full h-screen flex flex-col">
      <div className="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 h-32 "/>
      <div className="flex flex-col w-[500px] h-96">
        <Logotipo/>
        <form action="post" className="w-full p-4 shadow-lg rounded-lg bg-white flex-col flex gap-4">
          <span>Cadastro</span>
          <span className="w-full h-px bg-zinc-400"></span>
          <div className="flex-1 flex-col">
            <label>Nome:</label>
            <input type="text" onChange={(e) => setNome(nome)} value={nome} />
          </div>
          <div className="flex-1 flex-col">
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(email)} value={email} />
          </div>
          <div className="flex-1 flex-col">
            <label>Senha:</label>
            <input type="text" onChange={(e) => setSenha(senha)} value={senha} />
          </div>

          <Btn variant="primary" size="full" onClick={registrar}>
          registrar
          </Btn>
        </form>  
      </div>
    </div>
  )
}