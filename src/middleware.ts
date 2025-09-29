import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";


interface TokenPayload {
  sub: string;
  perfil: string;
  exp: number;
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (token) {
    try {
      const payload = jwtDecode<TokenPayload>(token);

      // Se for ADMIN, libera só /homeadmin
      if (req.nextUrl.pathname.startsWith("/homeadmin") && payload.perfil !== "ADMIN") {
        return NextResponse.redirect(new URL("/", req.url));
      }

      // Se for USER ou ADMIN, libera só /homeuser
      if (req.nextUrl.pathname.startsWith("/homeuser") && payload.perfil !== "USER" && payload.perfil !== "ADMIN") {
        return NextResponse.redirect(new URL("/", req.url));
      }

    } catch (error) {
      console.error("Token inválido:", error);
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/homeadmin/:path*", "/homeuser/:path*"],
};
