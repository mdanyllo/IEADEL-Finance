"use client"
import MonthSelector from "./monthselector";
import { useState } from "react";
import { useEffect } from "react";

export interface Dizimo {
    id: number;
    data: string;
    usuario: {
        id: number;
        nome: string;
    };
    valor: number;
}

interface MonthSelectorProps {
    initialMonth?: number;
    initialYear?: number;
    dizimos?: Dizimo[];
    onChange: (month: number, year: number) => void;
}

export default function Movimentacoes({
    initialMonth,
    initialYear,
    dizimos,
    onChange
}: MonthSelectorProps) {
    const today = new Date();
    const [mes, setMes] = useState(initialMonth || today.getMonth() + 1);
    const [ano, setAno] = useState(initialYear || today.getFullYear());
    const [dizimo, setDizimos] = useState<Dizimo[]>(dizimos || []);

    useEffect(() => {
    setDizimos(dizimos || []);
    }, [dizimos]);

    	useEffect(() => {
		async function fetchDizimosPorUsuario() {
			try {
				const idCongregacao = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!).congregacao.idCongregacao : null;
                const mesFormatado = String(mes).padStart(2, "0");
				const res = await fetch(`/api/movimentacoes/dizimos/porCongregacao?tipo=DIZIMO&mes=${mesFormatado}&ano=${ano}&idCongregacao=${idCongregacao}`);
				const data = await res.json();
				setDizimos(data);
				
			} catch (err) {
				console.error("Erro ao carregar saldo:", err);
			}
		}
		fetchDizimosPorUsuario()
	}, [mes, ano]);

    const dizimosFiltrados = dizimo.filter((d) => {
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
            <div className="flex justify-center mt-4 mb-8">
                <div className="md:w-3/4 m-2 md:mt-10 mt-16 shadow-lg rounded-lg overflow-x-auto">
                    <table className="w-full table-fixed border-collapse text-center">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="px-4 py-2 border w-1/3">Data</th>
                                <th className="px-4 py-2 border w-1/3">Nome</th>
                                <th className="px-4 py-2 border w-1/3">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
								{dizimosFiltrados.length > 0 ? (
									dizimosFiltrados.map((d) => (
										<tr key={d.id} className="bg-white hover:bg-gray-100">
											<td className="px-4 py-2 border w-1/3">{new Date(d.data).toLocaleDateString("pt-BR")}</td>
											<td className="px-4 py-2 border w-1/3"> {d.usuario.nome}</td>
											<td className="px-4 py-2 border w-1/3">
												R$ {d.valor.toFixed(2).replace(".", ",")}
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan={3} className="px-4 py-2 border text-center">
											Nenhum dízimo encontrado
										</td>
									</tr>
								)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}