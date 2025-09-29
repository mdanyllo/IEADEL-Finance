"use client";
import { useState } from "react";

export default function DespesaModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      valor: Number(valor) || 0,
      data,
      descricao
    };
     
    console.log(payload)

    // salvar no banco via fetch para API

    setValor("");
    setData("");
    setDescricao("");
    setIsOpen(false);
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Adicionar Despesa
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl">
          <div className="bg-white rounded-lg shadow-xl p-6 w-96 relative">
            <h2 className="text-xl font-bold mb-4">Nova despesa</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Descreva o motivo da despesa"
                  className="border p-2 w-full resize-none"
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
