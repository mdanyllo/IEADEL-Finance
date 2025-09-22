import { NextResponse } from "next/server";

export async function GET( request: Request ) {
    const { searchParams } = new URL(request.url);
    const id_usuario = searchParams.get("id_usuario");
  try {
    const res = await fetch(`https://iadel-api-rest.onrender.com/movimentacoes/dizimoByUsuario?id_usuario=${id_usuario}`);

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
