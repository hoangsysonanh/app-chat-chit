import { cookies } from 'next/headers'
export async function POST(request: Request) {
    const res = await request.json()
    const accessToken: string = res?.data?.token?.accessToken

    return new Response('dit me rito', {
        status: 200,
        headers: {
            'Set-Cookie': `accessToken=${accessToken}; Path=/; HttpOnly`
        }
    })

} 