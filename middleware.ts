import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: Request) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const url = req.nextUrl.clone();
  const isAuthPage = url.pathname === '/auth' || url.pathname === '/register';

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/profile', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/auth', '/register'], 
};
