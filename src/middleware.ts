import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // console.log(request.nextUrl.pathname);
    const accessToken = request.cookies.get('accessToken')?.value
    // console.log('a', accessToken);
    const pathName: string = request.nextUrl.pathname
    switch (pathName) {
        case '/login':
            if (!accessToken) {
                return NextResponse.next()
            }
            return NextResponse.redirect(new URL('/me', request.url))
        case '/register':
            if (!accessToken) {
                return NextResponse.next()
            }
            return NextResponse.redirect(new URL('/register', request.url))
        case '/me':
            if (!accessToken) {
                return NextResponse.redirect(new URL('/login', request.url))
            }
            else return NextResponse.next()
        default:
            return NextResponse.next()
    }

    // return NextResponse.redirect(new URL('/home'))
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/me',
        '/login',
        '/register'
    ]
}