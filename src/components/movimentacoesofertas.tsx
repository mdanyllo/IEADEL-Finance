"use client"
import MonthSelector from "./monthselector";
import { useState } from "react";
import { useEffect } from "react";

export interface Oferta {
    id: number;
    descricao: string;
    data: string;
    valor: number;
}
interface MonthSelectorProps {
    initialMonth?: number;
    initialYear?: number;
    ofertas?: Oferta[];
    onChange: (month: number, year: number) => void;
}

export default function Movimentacoes({
    initialMonth,
    initialYear,
    ofertas,
    onChange
}: MonthSelectorProps) {
    const today = new Date();
    const [mes, setMes] = useState(initialMonth || today.getMonth() + 1);
    const [ano, setAno] = useState(initialYear || today.getFullYear());
    const [oferta, setOfertas] = useState<Oferta[]>(ofertas || []);
    useEffect(() => {
    setOfertas(ofertas || []);
    }, [ofertas]);
    useEffect(() => {
        async function fetchOfertasPorUsuario() {
            try {
                const idCongregacao = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!).congregacao.idCongregacao : null;
                const mesFormatado = String(mes).padStart(2, "0");
                const res = await fetch(`/api/movimentacoes/dizimos/porCongregacao?tipo=OFERTA&mes=${mesFormatado}&ano=${ano}&idCongregacao=${idCongregacao}`);
                const data = await res.json();
                setOfertas(data);
            } catch (err) {
                console.error("Erro ao carregar saldo:", err);
            }
        }
        fetchOfertasPorUsuario()
    }, [mes, ano]);

    const ofertasFiltradas = oferta.filter((d) => {
    const data = new Date(d.data);
    return data.getMonth() + 1 === mes && data.getFullYear() === ano;
    });

    return (
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
                    {ofertasFiltradas.map((oferta) => (
                        <tr key={oferta.id} className="bg-white hover:bg-gray-100">
                            <td className="px-4 py-2 border w-1/3">{oferta.descricao}</td>
                            <td className="px-4 py-2 border w-1/3">R$ {oferta.valor.toFixed(2)}</td>
                            <td className="px-4 py-2 border w-1/3">{new Date(oferta.data).toLocaleDateString()}</td>
                        </tr>
                    ))}
                    {ofertasFiltradas.length === 0 && (
                        <tr>
                            <td colSpan={3} className="px-4 py-2 border">Nenhuma oferta encontrada.</td>
                        </tr>
                    )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}