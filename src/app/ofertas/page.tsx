"use client"
import NavBar from "@/components/navbar"
import MonthSelector from "@/components/monthselector"
import Movimentacoes, { Oferta } from "@/components/movimentacoesofertas"
import FormOfertas from "@/components/formofertas"
import { useState } from "react"
import { useEffect } from "react"


export default function Ofertas() {
    const [mes, setMes] = useState(new Date().getMonth() + 1);
    const [ano, setAno] = useState(new Date().getFullYear());
    const [oferta, setOferta] = useState<Oferta[]>([]);

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
                    const res = await fetch(`/api/movimentacoes/dizimos/porCongregacao?tipo=OFERTA&mes=${mesFormatado}&ano=${ano}&idCongregacao=${idCongregacao}`);
                    const data = await res.json();
                    setOferta(data);
                } catch (err) {
                    console.error("Erro ao carregar dízimos:", err);
                }
            }
            fetchDizimos();
        }, [mes, ano]);
    return (
        <>
            <div>
                <NavBar />
                <MonthSelector />
                <Movimentacoes 
                    initialMonth={mes}
                    initialYear={ano}
                    ofertas={oferta}
                    onChange={(novoMes, novoAno) => {
                        setMes(novoMes);
                        setAno(novoAno);
                    }}
                />
                <FormOfertas />
            </div>
        </>
    )
}