import {z} from 'zod'

export const searchSchema = z.object({
    // no special characters allowed like !@#$%^&*()_+ etc
    
    keyword: z.string().min(1).max(255),
})