import {z} from 'zod'

export const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})
export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})
export const tokenVerifySchema = z.object({
    email: z.string().email(),
    token: z.string().min(6),
})