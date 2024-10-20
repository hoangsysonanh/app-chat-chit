import Profile from '@/app/me/Profile'
import { cookies } from 'next/headers'
import React from 'react'

export default async function MePage() {

    // USE SERVER ACTION TO GET ME PROFILE
    const cookiesStore = cookies()
    const accesccToken = cookiesStore.get('accessToken')?.value
    const result = await fetch('http://localhost:3000/me/profile', {
        headers: {
            'Authorization': `Bearer ${accesccToken}`,
        }
    })
        .then(async (res) => {
            const data = await res.json()
            return data
        })
        // console.log(result);
    return (
        <div>
            {/* <Profile/> */}
            <h1> Xin chao {result.data.firstName}</h1>
        </div>
    )
}
