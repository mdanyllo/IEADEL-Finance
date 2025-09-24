import { NextResponse } from "next/server";
import { url } from "@/components/variavel";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const idCongregacao = searchParams.get("idCongregacao");
  try {
    const res = await fetch(`${url}/movimentacoes/totalGeral?idCongregacao=${idCongregacao}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Falha na autenticação", status: res.status },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });

  } catch (error) {
    console.error("Erro no proxy:", error);
    return NextResponse.json(
      { error: "Erro ao conectar com API" },
      { status: 500 }
    );
  }
}
