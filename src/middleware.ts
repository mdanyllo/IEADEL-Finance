import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rotas que precisam de login
const protectedRoutes = ["/homeadmin", "/homeuser"];

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token")?.value; // cookie de auth

  if (protectedRoutes.some((path) => url.pathname.startsWith(path))) {
    if (!token) {
      url.pathname = "/"; // redireciona para login
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/homeadmin/:path*", "/outra-rota/:path*"],
};
