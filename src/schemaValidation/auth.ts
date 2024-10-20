import z from 'zod'

export const RegisterBody = z.object({
    name: z.string().trim().min(6,).max(18, { message: 'Username must be between 6 and 18 characters' }),
    phone: z.number(),
    password: z.string().trim().min(6).max(18, {
        message: 'Password must be between 6 and 18 characters'
    })
}).strict()

export const LoginBody = z.object({
    phone: z.string().trim().min(6,).max(18, { message: 'Username must be between 6 and 18 characters' }),
    password: z.string().trim().min(6).max(18, {
        message: 'Password must be between 6 and 18 characters'
    }),
    notificationToken: z.string()
})

export type RegisterResType = z.TypeOf<typeof RegisterBody>
export type LoginBodyType = z.TypeOf<typeof LoginBody>

