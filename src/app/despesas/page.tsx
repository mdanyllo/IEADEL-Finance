"use client";
import NavBar from "@/components/navbar"
import FormDespesas from "@/components/formdespesas";
import Movimentacoes from "@/components/movimentacoesdespesas";
import MouthSelector from "@/components/monthselector";
import type { Despesa } from "@/components/movimentacoesdespesas";
import { useEffect } from "react";
import { useState } from "react";


export default function Despesas() {
    const [mes, setMes] = useState(new Date().getMonth() + 1);
    const [ano, setAno] = useState(new Date().getFullYear());
    const [despesa, setDespesa] = useState<Despesa[]>([]);
    function getIdCongregacao(): number | null {
        try {
            const user = localStorage.getItem("user");
            return user ? JSON.parse(user).congregacao.idCongregacao : null;
        } catch (error) {
            console.error("Erro ao ler localStorage:", error);
            return null;
        }
    }
    useEffect(() => {
        async function fetchDizimos() {
            try {
                const idCongregacao = getIdCongregacao();
                const mesFormatado = String(mes).padStart(2, "0");
                const res = await fetch(`/api/movimentacoes/dizimos/porCongregacao?tipo=DESPESA&mes=${mesFormatado}&ano=${ano}&idCongregacao=${idCongregacao}`);
                const data = await res.json();
                setDespesa(data);
            } catch (err) {
                console.error("Erro ao carregar dízimos:", err);
            }
        }
        fetchDizimos();
    }, [mes, ano]);

    return (
        <div>
            <NavBar />
            <Movimentacoes 
                initialMonth={new Date().getMonth() + 1}
                initialYear={new Date().getFullYear()}
                despesas={despesa}
                onChange={(novoMes, novoAno) => {
                    setMes(novoMes);
                    setAno(novoAno);
                }}
            />
            <FormDespesas />
        </div>
    )
}
