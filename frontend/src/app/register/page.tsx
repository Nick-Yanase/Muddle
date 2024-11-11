"use client";

import Btn from "@/components/btn";
import Logotipo from "@/components/layout/footer/logotipo";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const registrar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita o recarregamento da página

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
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
    <div className="w-full h-screen flex flex-col">
      <div className="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 h-32 " />
      <div className="flex flex-col w-[500px] h-96">
        <Logotipo />
        <form
          className="w-full p-4 shadow-lg rounded-lg bg-white flex-col flex gap-4"
          onSubmit={registrar}
        >
          <span>Cadastro</span>
          <span className="w-full h-px bg-zinc-400"></span>
          <div className="flex-1 flex-col">
            <label>Nome:</label>
            <input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
          </div>
          <div className="flex-1 flex-col">
            <label>Email:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex-1 flex-col">
            <label>Senha:</label>
            <input
              type="password"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
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
