"use client";

import Btn from "@/components/btn";
import Logotipo from "@/components/layout/footer/logotipo";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita o recarregamento da página

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, password }),
      });

      if (res.ok) {
        console.log("Dados cadastrados com sucesso");
        // const data = await res.json();
        // alert("Cadastro efetuado com sucesso!");
        // router.push("/todoList");
      } else {
        const data = await res.json();
        alert(data.message || "Erro ao cadastrar");
      }
    } catch (error) {
      console.error("Erro ao registrar:", error);
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col  items-center">
      <div className="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 h-32 " />
      <div className="flex flex-col w-[600px] h-[400px] gap-3">
        <Logotipo />
        <form
          className="w-full p-4 shadow-lg rounded-lg bg-white flex-col flex gap-8"
          onSubmit={registrar}
        >
          <span className="text-xl font-semibold text-emerald-950">Cadastro</span>
          <span className="w-full h-px bg-zinc-400"></span>
          <div className="flex-1  flex gap-3">
            <label>Nome:</label>
            <input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              className="border-b w-full"
            />
          </div>
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
            Registrar
          </Btn>
        </form>
      </div>
    </div>
  );
}
