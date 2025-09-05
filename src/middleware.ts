import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/homeadmin", "/homeuser"];

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token")?.value;

  if (protectedRoutes.some((path) => url.pathname.startsWith(path))) {
    if (!token) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/homeadmin/:path*", "/homeuser/:path*"],
};
