"use client"; 
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <p className="text-2xl text-center">ASSEMBLÉIA DE DEUS <br />EL-SHADDAI</p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white mt-2 shadow-sm rounded-lg p-6 w-96 flex flex-col gap-4"
                    >
                    <h1 className="font-semibold text-5xl text-center mb-6">Login</h1>
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
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        className="w-full p-2 border text-xl placeholder-[#383838] rounded-md ring-[#6d6d6d] ring-1 focus:ring-2 focus:ring-blue-500"
                        required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white text-xl cursor-pointer py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Entrar
                    </button>
                </form>
            </main>
        </div>
    )
}
