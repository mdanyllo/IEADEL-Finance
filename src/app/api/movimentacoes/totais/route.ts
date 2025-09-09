import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://iadel-api-rest.onrender.com/movimentacoes/totais?mes=09&ano=2025");

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
