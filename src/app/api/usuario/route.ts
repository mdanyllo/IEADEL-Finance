import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const idCongregacao = searchParams.get("idCongregacao");
  const query = searchParams.get("query")?.toLowerCase() || "";

  if (!query) return NextResponse.json([]);

  const result = await sql`
    SELECT id_usuario, nome
    FROM usuario
    WHERE LOWER(nome) LIKE ${"%" + query + "%"}
      AND id_congregacao = ${idCongregacao}
    ORDER BY nome
    LIMIT 5
  `;

  return NextResponse.json(result);
}
