import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedIPs = ["199.83.103.128"];

export function middleware(req: NextRequest) {
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0] || req.ip;

  if (clientIP && !allowedIPs.includes(clientIP)) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  return withAuth(req);
}

export const config = { matcher: ["/profile", "/payment"] };
