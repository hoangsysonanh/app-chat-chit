import FormLogin from '@/app/(auth)/login/FormLogin'
import React from 'react'

export default function LoginPage() {
    return (
        <div>
            <h1 className="text-lg text-center font-semibold">Login</h1>
            <div className='flex justify-center'>
                <FormLogin />
            </div>
        </div>)
}
