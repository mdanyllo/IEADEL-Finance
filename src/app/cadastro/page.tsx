"use client"; 
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

      async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);
  }

    return (
        <div className="flex flex-col items-center w-full mt-8">
            <main className="flex flex-col items-center gap-6">
                <Image 
                src="/logo.png"
                alt="Logo"
                width={90}
                height={90}
                >
                </Image>
                <p className="text-xl text-center">ASSEMBLÉIA DE DEUS <br />EL-SHADDAI</p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white mt-8 shadow-sm rounded-lg p-6 w-96 flex flex-col gap-4"
                    >
                    <h1 className="font-semibold text-4xl text-center mb-6">Cadastro</h1>
                    <div>
                        <input
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        className="w-full capitalize p-2 border text-xl placeholder-[#383838] ring-[#6d6d6d] ring-1 rounded-md focus:ring-2 focus:ring-blue-500"
                        required
                        />
                    </div>

                    <div>
                        <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full p-2 border text-xl placeholder-[#383838] ring-[#6d6d6d] ring-1 rounded-md focus:ring-2 focus:ring-blue-500"
                        required
                        />
                    </div>

                    <div>
                        <select
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="w-full p-2 border text-xl text-[#383838] ring-[#6d6d6d] ring-1 rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option className="text-sm" value="" disabled>
                            Sua congregação
                            </option>
                            <option className="text-sm" value="opcao1">Sede</option>
                            <option className="text-sm" value="opcao2">Piçarreira</option>
                            <option className="text-sm" value="opcao3">Vila do povo</option>
                        </select>
                    </div>


                    <div>
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Criar senha"
                        className="w-full p-2 border text-xl placeholder-[#383838] rounded-md ring-[#6d6d6d] ring-1 focus:ring-2 focus:ring-blue-500"
                        required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white text-xl cursor-pointer py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Criar conta
                    </button>
                    <p className="text-center">Já possui uma conta? <Link className="underline" href="/">Login</Link></p>
                </form>
            </main>
        </div>
    )
}
