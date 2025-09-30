"use client"
import MonthSelector from "./monthselector";
import { useState } from "react";
import { useEffect } from "react";

export interface Despesa {
    id: number;
    descricao: string;
    data: string;
    valor: number;
}
interface MonthSelectorProps {
    initialMonth?: number;
    initialYear?: number;
    despesas?: Despesa[];
    onChange: (month: number, year: number) => void;
}

export default function Movimentacoes({
    initialMonth,
    initialYear,
    despesas,
    onChange
}: MonthSelectorProps) {
    const today = new Date();
    const [mes, setMes] = useState(initialMonth || today.getMonth() + 1);
    const [ano, setAno] = useState(initialYear || today.getFullYear());
    const [despesa, setDespesas] = useState<Despesa[]>(despesas || []);
    useEffect(() => {
    setDespesas(despesas || []);
    }, [despesas]);
    useEffect(() => {
        async function fetchDespesasPorUsuario() {
            try {
                const idCongregacao = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!).congregacao.idCongregacao : null;
                const mesFormatado = String(mes).padStart(2, "0");
                const res = await fetch(`/api/movimentacoes/dizimos/porCongregacao?tipo=DESPESA&mes=${mesFormatado}&ano=${ano}&idCongregacao=${idCongregacao}`);
                const data = await res.json();
                setDespesas(data);
            } catch (err) {
                console.error("Erro ao carregar saldo:", err);
            }
        }
        fetchDespesasPorUsuario()
    }, [mes, ano]);

    const despesasFiltradas = despesa.filter((d) => {
    const data = new Date(d.data);
    return data.getMonth() + 1 === mes && data.getFullYear() === ano;
    });

    return (
        <>
            <MonthSelector
                initialMonth={mes}
                initialYear={ano}
                onChange={(novoMes, novoAno) => {
                setMes(novoMes);
                setAno(novoAno);
                }}
            />
            <div className="flex justify-center mb-8">      
                <div className="md:w-3/4 m-2 md:mt-10 mt-16 shadow-lg rounded-lg overflow-x-auto">
                    <table className="w-full table-fixed border-collapse text-center">
                        <thead className="bg-black text-white">
                        <tr>    
                            <th className="px-4 py-2 border w-1/3">Descrição</th>
                            <th className="px-4 py-2 border w-1/3">Valor</th>
                            <th className="px-4 py-2 border w-1/3">Data</th>
                        </tr>
                        </thead>
                        <tbody>
                        {despesasFiltradas.map((despesa) => (
                            <tr key={despesa.id} className="bg-white hover:bg-gray-100">
                                <td className="px-4 py-2 border w-1/3">{despesa.descricao}</td>
                                <td className="px-4 py-2 border w-1/3">R$ {despesa.valor.toFixed(2)}</td>
                                <td className="px-4 py-2 border w-1/3">{new Date(despesa.data).toLocaleDateString()}</td>
                            </tr>
                        ))}
                        {despesasFiltradas.length === 0 && (
                            <tr>
                                <td colSpan={3} className="px-4 py-2 border">Nenhuma despesa encontrada.</td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}