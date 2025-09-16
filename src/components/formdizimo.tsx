"use client";
import { useState } from "react";

type Pessoa = { id: number; nome: string };

export default function DizimoModal() {
  const [nome, setNome] = useState("");
  const [sugestoes, setSugestoes] = useState<Pessoa[]>([]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const valor = e.target.value;
    setNome(valor);

    if (valor.length > 1) {
      const res = await fetch(`/api/usuario?query=${valor}`);
      const data: Pessoa[] = await res.json();
      setSugestoes(data);
    } else {
      setSugestoes([]);
    }
  }

  function handleSelect(pessoa: Pessoa) {
    setNome(pessoa.nome);
    setSugestoes([]);
  }

  return (
    <div className="relative w-64">
      <input
        type="text"
        value={nome}
        onChange={handleChange}
        placeholder="Nome da pessoa"
        className="border p-2 w-full"
      />

      {sugestoes.length > 0 && (
        <ul className="absolute z-10 bg-white border w-full max-h-40 overflow-y-auto">
          {sugestoes.map((p) => (
            <li
              key={p.id}
              onClick={() => handleSelect(p)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {p.nome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
