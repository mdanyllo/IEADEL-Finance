"use client";
import NavBar from "@/components/navbar"
import FormDespesas from "@/components/formdespesas";
import Movimentacoes from "@/components/movimentacoesdespesas";

export default function Despesas() {
    return (
        <div>
            <NavBar />
            <Movimentacoes />
            <FormDespesas />
        </div>
    )
}
