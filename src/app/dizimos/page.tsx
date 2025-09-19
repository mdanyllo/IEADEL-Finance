import Head from "next/head";
import NavBar from "@/components/navbar"
import MonthSelector from "@/components/monthselector"
import FormDizimo from "@/components/formdizimo";
import MovimentacoesDizimo from "@/components/movimentacoesdizimo";


export default function Dizimos() {
    return (
        <div>
            <head>
                <title>Dízimos</title>
            </head>
            <NavBar />
            <MonthSelector />
            <MovimentacoesDizimo />
            <FormDizimo />
        </div>
    )
}