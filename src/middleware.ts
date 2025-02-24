import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    const url = new URL("/login", req.url);
    url.searchParams.set("redirect", req.nextUrl.pathname); // 🔹 Salva destino
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/profile", "/settings"], // Protege mais rotas
};
