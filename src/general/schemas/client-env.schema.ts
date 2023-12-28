import { z } from 'zod'

export const clientEnvSchema = z.object({
   SUPABASE_URL: z.string().url(),
   SUPABASE_KEY: z.string(),
})

export type ClientEnv = z.infer<typeof clientEnvSchema>
