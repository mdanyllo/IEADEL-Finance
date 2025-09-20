import NavBar from "@/components/navbar"
import MonthSelector from "@/components/monthselector"
import Movimentacoes from "@/components/movimentacoesofertas"
import FormOfertas from "@/components/formofertas"

export const metadata = {
  title: "Ofertas",
};


export default function Ofertas() {
    return (
        <>
            <div>
                <NavBar />
                <MonthSelector />
                <Movimentacoes />
                <FormOfertas />
            </div>
        </>
    )
}