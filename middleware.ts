import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('uid')?.value;
    const { pathname } = req.nextUrl;


    if (pathname === '/login' || pathname === '/signup') {
        return NextResponse.next();
    }
    
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    try {

        const res = await fetch(`${process.env.API_URL}/user/verify_login`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
        });
        const data = await res.json();

        if (res.status !== 200 || !data.valid) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    } catch (error) {
        console.error('Error verifying token');
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|api|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)',
    ],
};
