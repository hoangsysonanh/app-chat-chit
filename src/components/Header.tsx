import { ModeToggle } from '@/components/ModeToggle'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div>
            <ModeToggle />
            <div className='flex gap-x-4'>
                <ul>
                    <li><Link href={'/login'}>Login</Link></li>
                    <li><Link href={'/register'}>Register</Link></li>
                </ul>
            </div>
        </div>
    )
}
