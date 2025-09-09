"use client"; 
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/navbar";
import MonthSelector from "@/components/monthselector";
import { useEffect } from "react";

import { useState } from "react";
import { useEffect } from "react";


export default function HomeAdmin() {
    const [saldo, setSaldo] = useState([]);
    const [dizimo, setDizimo] = useState([]);
    const [oferta, setOferta] = useState([]);
    const [despesa, setDespesa] = useState([]);
    
    // Saldo Geral
    useEffect(() => {
        async function fetchSaldoGeral() {
            try {
                const res = await fetch("/api/movimentacoes/saldoTotal");
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
                const res = await fetch("/api/movimentacoes/totais");
                const data = await res.json();
                setDizimo(data.dizimo);
                setOferta(data.oferta);
                setDespesa(data.despesa);

            } catch (err) {
                console.error("Erro ao carregar dízimo:", err);
            }
        }
        fetchTotais();
    }, []);

    console.log("Saldo Total:", saldo);
    console.log("Dízimo Total:", dizimo);
    console.log("Oferta Total:", oferta);
    console.log("Despesa Total:", despesa);

    return (
        <div>
            <NavBar />
            <MonthSelector />
            <div className="flex flex-col items-center w-full mt-10 md:gap-20 gap-8">
                <div className="flex flex-row justify-center md:gap-30 gap-10 md:w-full w-90">
                    <section className="flex gap-4 bg-[#008eff] md:py-8 py-5 px-2 w-40 rounded-sm">
                        <Link className="w-full flex justify-start items-center gap-4" href="/cadastro">
                            <h1 className="text-xl ml-2 text-white">Dizímo</h1>
                            <Image
                                alt="Símbolo financeiro" 
                                src="/dizimo.png"
                                width={40}
                                height={40}>
                            </Image>
                        </Link>
                    </section>
                    <section className="flex gap-4 bg-[#f5dd02] md:py-8 py-5 px-2 w-40 rounded-sm">
                        <Link className="w-full flex justify-center items-center gap-4" href="/cadastro">
                            <h1 className="text-xl ml-1 text-white">Oferta</h1>
                            <Image
                                alt="Símbolo financeiro" 
                                src="/oferta.png"
                                width={40}
                                height={40}>
                            </Image>
                        </Link>
                    </section>
                </div>
                <div className="flex flex-shrink-0 flex-row justify-center md:gap-30 gap-10 md:w-full min-w-90">
                    <section className="flex gap-4 bg-[#ff2200] md:py-8 py-5 px-2 w-40 rounded-sm">
                        <Link className="w-full flex justify-start items-center gap-2" href="/cadastro">
                            <h1 className="text-xl md:ml-1.5 text-white">Despesas</h1>
                            <Image
                                alt="Símbolo financeiro" 
                                src="/despesa.png"
                                width={40}
                                height={40}>
                            </Image>
                        </Link>
                    </section>
                    <section className="flex gap-4 bg-[#00cf40] py-5 px-2 w-40 rounded-sm">
                        <Link className="w-full flex justify-center items-center gap-4" href="/cadastro">
                            <div className="flex flex-col">
                            <h1 className="text-xl text-center text-white">Saldo</h1>
                            <span className="text-[#007525] text-sm">R$ 10000,00</span>
                            </div>
                            <Image
                                alt="Símbolo financeiro" 
                                src="/saldo.png"
                                width={40}
                                height={40}>
                            </Image>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    )
}