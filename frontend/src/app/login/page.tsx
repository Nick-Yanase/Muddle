'use client'
import Btn from "@/components/btn"
import Logotipo from "@/components/layout/footer/logotipo"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Login(){
  const router = useRouter();
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({email, password})
      })

      const data = await res.json()

      if(res.ok){
        alert("login efetuado com sucesso")
        localStorage.setIatem("token", data.token)
        return router.push("/todoList")
      }
      return alert(data.message ||"Erro ao fazer o login")
    }catch(error){
      console.error("Erro ao fazer login:", error);
      alert("Erro no servidor");
    }
  }
  return(

    <div className="w-full h-screen flex flex-col  items-center">
      <div className="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 h-32 " />
      <div className="flex flex-col w-[600px] h-[400px] gap-3">
        <Logotipo />
        <form
          className="w-full p-4 shadow-lg rounded-lg bg-white flex-col flex gap-8"
          onSubmit={handleLogin}
        >
          <span className="text-xl font-semibold text-emerald-950">Login</span>
          <span className="w-full h-px bg-zinc-400"></span>

          <div className="flex-1 flex gap-3">
            <label>Email:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border-b w-full"
            />
          </div>
          <div className="flex-1 flex gap-3">
            <label>Senha:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border-b w-full"
            />
          </div>

          <Btn variant="primary" size="full" type="submit">
            Login
          </Btn>
        </form>
      </div>
    </div>
  )
}