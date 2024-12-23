import { NextResponse } from "next/server";

export async function middleware(req: any) {
  const token = req.cookies.get("authToken");

  const protectedRoutes = ["/"];
  const publicRoutes = ["/login", "/register"];

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else if (publicRoutes.includes(req.nextUrl.pathname)) {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}
