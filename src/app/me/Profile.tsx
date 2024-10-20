'use client'
import { useAuthStore } from '@/stores/authStore'
import React, { useEffect, useState } from 'react'
export default function Profile() {
    useEffect(() => {
        const accessToken = useAuthStore(state => state.token)
        const getProfile = async () => {
            const res: any = await fetch('http://localhost:3000/me/profile', {
                headers: {
                    'Authorization': ` Bearer ${accessToken}`
                }
            })
                .then(async (res) => {
                    const data = await res.json()
                    console.log(data);
                    return data
                })

        }
        getProfile()

    }, [])
    return (
        <div>

        </div>
    )
}
