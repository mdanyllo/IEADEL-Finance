"use client"
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
    onChange?: (mes: number, ano: number) => void;
}

export default function Movimentacoes({
    initialMonth,
    initialYear,
    onChange,
    dizimos,
}: MonthSelectorProps) {
    const today = new Date();
    const [mes, setMes] = useState(initialMonth || today.getMonth() + 1);
    const [ano, setAno] = useState(initialYear || today.getFullYear());
    const [dizimo, setDizimos] = useState<Dizimo[]>(dizimos || []);

    useEffect(() => {
        setDizimos(dizimos || []);
    }, [dizimos]);

    const prevMonth = () => {
        let newMes = mes;
        let newAno = ano;

        if (mes === 1) {
            newMes = 12;
            newAno = ano - 1;
        } else {
            newMes = mes - 1;
        }

        setMes(newMes);
        setAno(newAno);
        onChange?.(newMes, newAno);
    };

    const nextMonth = () => {
        let newMes = mes;
        let newAno = ano;

        if (mes === 12) {
            newMes = 1;
            newAno = ano + 1;
        } else {
            newMes = mes + 1;
        }

        setMes(newMes);
        setAno(newAno);
        onChange?.(newMes, newAno);
    };
    return (
        <div className="flex justify-center mb-8">
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
                        {dizimo.map((d: Dizimo) => (
                            <tr key={d.id} className="bg-white hover:bg-gray-100">
                                <td className="px-4 py-2 border w-1/3"> {new Date(d.data).toLocaleDateString("pt-BR")} </td>
                                <td className="px-4 py-2 border w-1/3"> {d.usuario.nome}</td>
                                <td className="px-4 py-2 border w-1/3"> R$ {d.valor.toFixed(2).replace('.', ',')} </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}