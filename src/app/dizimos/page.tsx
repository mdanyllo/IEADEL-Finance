"use client";
import NavBar from "@/components/navbar"
import FormDizimo from "@/components/formdizimos";
import Movimentacoes from "@/components/movimentacoesdizimos";
import type { Dizimo } from "@/components/movimentacoesdizimos";
import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";

export default function Dizimos() {
    const [mes, setMes] = useState(new Date().getMonth() + 1);
    const [ano, setAno] = useState(new Date().getFullYear());
    const [dizimo, setDizimo] = useState<Dizimo[]>([]);

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
                const res = await fetch(`/api/movimentacoes/dizimos/porCongregacao?tipo=DIZIMO&mes=${mesFormatado}&ano=${ano}&idCongregacao=${idCongregacao}`);
                const data = await res.json();
                setDizimo(data);
            } catch (err) {
                console.error("Erro ao carregar dízimos:", err);
            }
        }
        fetchDizimos();
    }, [mes, ano]);
    return (
        <>
            <Head>
                <title>Dízimos</title>
            </Head>
            <div>
                <NavBar />
                <Movimentacoes
                    initialMonth={mes}
                    initialYear={ano}
                    dizimos={dizimo}
                    onChange={(novoMes, novoAno) => {
                        setMes(novoMes);
                        setAno(novoAno);
                    }}
                />
                <FormDizimo />
            </div>
        </>
    )
}