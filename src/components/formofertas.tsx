"use client";
import { useState } from "react";

type Pessoa = { id: number; nome: string };

export default function OfertaModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      descricao: descricao || "",
      valor: Number(valor) || 0,
      data,
      idCongregacao: JSON.parse(localStorage.getItem("user") || "{}").congregacao.idCongregacao,
      tipo: "OFERTA",
      usuarioId: null,
    };

    console.log("Oferta enviada:", payload);

    await fetch("/api/movimentacoes/novo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    setValor("");
    setData("");
    setDescricao("");
    setIsOpen(false);
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Adicionar Oferta
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl">
          <div className="bg-white rounded-lg shadow-xl p-6 w-96 relative">
            <h2 className="text-xl font-bold mb-4">Nova oferta</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                value={descricao}
                placeholder="Digite a descrição"
                onChange={(e) => setDescricao(e.target.value)}
                className="border p-2 w-full"
                rows={2}
              />

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
