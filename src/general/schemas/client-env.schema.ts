import { z } from 'zod'

export const clientEnvSchema = z.object({
   supabaseUrl: z.string().url(),
   supabaseKey: z.string(),
})

export type ClientEnv = z.infer<typeof clientEnvSchema>
