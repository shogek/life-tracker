import { ClientEnv, clientEnvSchema } from '@schemas/client-env.schema'

const clientEnv: ClientEnv = {
   supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
   supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
}

const parseResult = clientEnvSchema.safeParse(clientEnv)
if (!parseResult.success) {
   alert(`Failed to parse "clientEnv": (${parseResult.error})`)
   throw Error(`Failed to parse "clientEnv": (${parseResult.error})`)
}

export const CLIENT_ENV = Object.freeze(parseResult.data)
