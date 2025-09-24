// src/app/api/movimentacoes/dizimos/porCongregacao/route.ts
import { NextResponse } from "next/server";
import { url } from "@/components/variavel";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const tipo = searchParams.get("tipo");
  const mes = searchParams.get("mes");
  const ano = searchParams.get("ano");
  const idCongregacao = searchParams.get("idCongregacao");

  // Monta a URL para o backend
  const apiUrl = `${url}/movimentacoes?tipo=${tipo}&mes=${mes}&ano=${ano}&idCongregacao=${idCongregacao}`;

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });

    if (!res.ok) {
      return NextResponse.json({ error: "Erro no backend" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao buscar dados" }, { status: 500 });
  }
}
