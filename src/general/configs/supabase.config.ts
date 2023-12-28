import { createClient } from '@supabase/supabase-js'
import { clientEnv } from './client-env.config'

export const supabase = createClient(
   clientEnv.SUPABASE_URL,
   clientEnv.SUPABASE_KEY,
)
