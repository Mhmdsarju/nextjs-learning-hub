
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

  console.log("Middleware executed!");

  return NextResponse.next();
}

export const config = {
  matcher: ["/about/:path*"],
};
