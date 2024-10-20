"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginBody, LoginBodyType } from "@/schemaValidation/auth"
import { useAuthStore } from "@/stores/authStore"


const FormLogin = () => {
    const setAcessToken = useAuthStore((state) => state.setToken)
    // 1. Define your form.
    const form = useForm<LoginBodyType>({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            phone: '',
            password: '',
            notificationToken: ''
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: LoginBodyType) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            const result = await fetch('http://localhost:3000/auth/login', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            }).then(async (res) => {
                const data = await res.json()
                if (!data.success) {
                    throw data
                }
                return data
            })
            const token = result.data.token.accessToken
            setAcessToken(token)
            //  save accessToken to localstorege 
            localStorage.setItem('accessToken', token)
            const ressultFromNextServer = await fetch('api/auth', {
                method: 'POST',
                body: JSON.stringify(result),
                headers: {
                    'Content-Type': 'application/json'
                }
            })


        } catch (error) {

        }
    }
    const a = useAuthStore((state) => state.token)

    return (
        <Form {...form}>
            <p>{a}</p>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2 max-w-[600px] flex-shrink-0 w-full">
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" type="password"{...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    className="!w-full !mt-8"
                    type="submit">Login</Button>
            </form>
        </Form>
    )
}
export default FormLogin