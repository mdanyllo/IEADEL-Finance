import NavBar from "@/components/navbar"
import MonthSelector from "@/components/monthselector"
import FormDizimo from "@/components/formdizimo";
import Movimentacoes from "@/components/movimentacoesdizimos";
import Head from "next/head";

export const metadata = {
  title: "Dízimos",
};

export default function Dizimos() {
    return (
        <>
            <Head>
                <title>Dízimos</title>
            </Head>
            <div>
                <NavBar />
                <MonthSelector />
                <Movimentacoes />
                <FormDizimo />
            </div>
        </>
    )
}