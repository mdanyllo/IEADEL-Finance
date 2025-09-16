import Head from "next/head";
import NavBar from "@/components/navbar"
import MonthSelector from "@/components/monthselector"
import FormDizimo from "@/components/formdizimo";


export default function Dizimos() {
    return (
        <div>
            <head>
                <title>Dízimos</title>
            </head>
            <NavBar />
            <MonthSelector />
            <FormDizimo />
        </div>
    )
}