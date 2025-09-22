"use client"; 
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import NavBar from "@/components/navbar";
import MonthSelector from "@/components/monthselector";

import { useEffect } from "react";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function HomeAdmin() {
    const [mes, setMes] = useState(new Date().getMonth() + 1);
    const [ano, setAno] = useState(new Date().getFullYear());
    const [saldo, setSaldo] = useState(0);
    const [dizimo, setDizimo] = useState(0);
    const [oferta, setOferta] = useState(0);
    const [despesa, setDespesa] = useState(0);

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
        async function fetchSaldoGeral() {
            try {
                const idCongregacao = getIdCongregacao();
                const res = await fetch(`/api/movimentacoes/saldoTotal?idCongregacao=${idCongregacao}`);
                const data = await res.json();
                setSaldo(data.total);
            } catch (err) {
                console.error("Erro ao carregar saldo:", err);
            }
        }

        fetchSaldoGeral();
    }, []);

    useEffect(() => {
        async function fetchTotais() {
        try {
            const idCongregacao = getIdCongregacao();
            const res = await fetch(`/api/movimentacoes/totais?mes=${mes}&ano=${ano}&idCongregacao=${idCongregacao}`);
            const data = await res.json();
            setDizimo(data.dizimo);
            setOferta(data.oferta);
            setDespesa(data.despesa);
        } catch (err) {
            console.error("Erro ao carregar totais:", err);
        }
        }
        fetchTotais();
    }, [mes, ano]);

      function formatBRL(value: number | string | null) {
    const num =
      value == null
        ? 0
        : typeof value === "string"
        ? parseFloat(value.replace(/\./g, "").replace(",", "."))
        : Number(value);
    if (Number.isNaN(num)) return "R$ 0,00";
    return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <NavBar />
                <MonthSelector
                    initialMonth={mes}
                    initialYear={ano}
                    onChange={(novoMes, novoAno) => {
                    setMes(novoMes);
                    setAno(novoAno);
                    }}
                />
                <div className="flex flex-col items-center font-medium w-full md:mt-14 mt-10 md:gap-20 gap-8">
                    <div className="flex flex-row justify-center md:gap-30 gap-10 md:w-full w-90">
                        <section className="flex bg-[#008eff] md:py-8 py-5 px-2 w-40 rounded-sm md:w-1/3">
                            <Link className="w-full flex justify-center items-center gap-4" href="/dizimos">
                                <div className="flex flex-col md:items-center">
                                <h1 className="text-xl md:text-3xl text-center text-white">Dízimos</h1>
                                <span className="text-[#004781] md:text-base text-sm">{formatBRL(dizimo)}</span>
                                </div>
                                <Image
                                    alt="Símbolo financeiro" 
                                    src="/dizimo.png"
                                    width={40}
                                    height={40}
                                    className="md:w-1/7 md:ml-6"
                                    >
                                </Image>
                            </Link>
                        </section>
                        <section className="flex gap-4 bg-[#f5dd02] md:py-8 py-5 px-2 w-40 rounded-sm md:w-1/3">
                            <Link className="w-full flex justify-center items-center gap-4" href="/ofertas">
                                <div className="flex flex-col">
                                <h1 className="text-xl md:text-3xl text-center text-white">Ofertas</h1>
                                <span className="text-[#9c8d00] text-center md:text-base text-sm">{formatBRL(oferta)}</span>
                                </div>
                                <Image
                                    alt="Símbolo financeiro" 
                                    src="/oferta.png"
                                    width={40}
                                    height={40}
                                    className="md:w-1/7 md:ml-4"
                                    >
                                </Image>
                            </Link>
                        </section>
                    </div>
                    <div className="flex flex-shrink-0 flex-row justify-center md:gap-30 gap-10 md:w-full min-w-90">
                        <section className="flex gap-4 bg-[#ff2200] md:py-8 py-5 px-2 w-40 rounded-sm md:w-1/3">
                            <Link className="w-full flex justify-center items-center gap-2" href="/cadastro">
                                <div className="flex flex-col">
                                <h1 className="text-xl md:text-3xl text-center text-white">Despesas</h1>
                                <span className="text-[#961400] md:text-base text-center text-sm">{formatBRL(despesa)}</span>
                                </div>
                                <Image
                                    alt="Símbolo financeiro" 
                                    src="/despesa.png"
                                    width={40}
                                    height={40}
                                    className="md:w-1/7 md:ml-4"
                                    >
                                </Image>
                            </Link>
                        </section>
                        <section className="flex bg-[#00cf40] py-5 px-2 w-40 rounded-sm md:w-1/3">
                            <Link className="w-full flex justify-center items-center gap-4" href="">
                                <div className="flex flex-col">
                                <h1 className="text-xl md:text-3xl text-center text-white">Saldo</h1>
                                <span className="text-[#007525] md:text-base text-sm">{formatBRL(saldo)}</span>
                                </div>
                                <Image
                                    alt="Símbolo financeiro" 
                                    src="/saldo.png"
                                    width={40}
                                    height={40}
                                    className="md:w-1/7 md:ml-6"
                                    >
                                </Image>
                            </Link>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}