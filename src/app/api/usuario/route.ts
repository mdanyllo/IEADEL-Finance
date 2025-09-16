import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query")?.toLowerCase() || "";

  if (!query) return NextResponse.json([]);

  const result = await sql`
    SELECT id_usuario, nome
    FROM usuario
    WHERE LOWER(nome) LIKE ${"%" + query + "%"}
    ORDER BY nome
    LIMIT 5
  `;

  return NextResponse.json(result);
}
