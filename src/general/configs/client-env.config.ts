import { ClientEnv, clientEnvSchema } from '@schemas/client-env.schema'

const env: ClientEnv = {
   SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
   SUPABASE_KEY: import.meta.env.VITE_SUPABASE_KEY,
}

const parseResult = clientEnvSchema.safeParse(env)
if (!parseResult.success) {
   alert(`Failed to parse "clientEnv": (${parseResult.error})`)
   throw Error(`Failed to parse "clientEnv": (${parseResult.error})`)
}

export const clientEnv = Object.freeze(parseResult.data)
