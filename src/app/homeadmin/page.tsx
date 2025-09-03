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
            <div className="flex flex-col items-center w-full m-4 mt-10 gap-30">
                <div className="flex flex-row justify-between w-80">
                    <section>
                        <h1 className="text-xl">Dizímo</h1>
                    </section>
                    <section>
                        <h1 className="text-xl">Despesas</h1>
                    </section>
                </div>
                <div className="flex flex-row justify-between w-80">
                    <section>
                        <h1 className="text-xl">Ofertas</h1>
                    </section>
                    <section>
                        <h1 className="text-xl">Saldo Geral</h1>
                    </section>
                </div>
            </div>
        </div>
    )
}