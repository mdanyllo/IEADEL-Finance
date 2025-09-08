"use client"; 
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/navbar";
import MonthSelector from "@/components/monthselector";

import { useState } from "react";


export default function HomeAdmin() {
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
                <div className="flex flex-row justify-center md:gap-30 gap-10 md:w-full w-90">
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
                            <h1 className="text-xl text-white">Saldo</h1>
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