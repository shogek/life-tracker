import { DayStatsList } from '@components/day-stats-list/day-stats-list.component'
import { supabase } from '@configs/supabase.config'
import { useEffectOnce } from '@hooks/useEffectOnce'

export default function HomePage() {
   useEffectOnce(() => {
      supabase.auth.getSession().then((response) => {
         console.log('HomePage | session', response)
      })
   })

   return <DayStatsList />
}
