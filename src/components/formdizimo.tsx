"use client";
import { useState } from "react";

type Pessoa = { id: number; nome: string };

export default function DizimoModal() {
  const [isOpen, setIsOpen] = useState(false); 
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [sugestoes, setSugestoes] = useState<Pessoa[]>([]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const valorInput = e.target.value;
    setNome(valorInput);

    if (valorInput.length > 1) {
      const res = await fetch(`/api/usuario?query=${valorInput}`);
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      nome,
      valor: Number(valor) || 0,
      data,
    };

    console.log("Dízimo enviado:", payload);

    // salvar no banco via fetch para API

    setNome("");
    setValor("");
    setData("");
    setSugestoes([]);
    setIsOpen(false);
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Adicionar Dízimo
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl">
          <div className="bg-white rounded-lg shadow-xl p-6 w-96 relative">
            <h2 className="text-xl font-bold mb-4">Novo Dízimo</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
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

              <input
                type="number"
                value={valor}
                inputMode="decimal" 
                step="0.01"
                placeholder="R$ 0,00"
                onChange={(e) => setValor(e.target.value)}
                className="border p-2 w-full"
              />

              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="border p-2 w-full"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
