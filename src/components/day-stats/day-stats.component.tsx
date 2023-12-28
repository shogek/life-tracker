import { getDayOfWeekInText, getTodayDate } from '@helpers/date.helpers'
import { DayStatsProps } from './types'
import s from './day-stats.module.scss'

export function DayStats({ date, achievements }: DayStatsProps) {
   return (
      <section className={s.wrapper}>
         <span>
            {getTodayDate(date)} · {getDayOfWeekInText(date)}
         </span>
         <span>✓ Fasted 16h</span>
         <span>Kavos × 1</span>
         <span>Atsispaudimai + svarmenys + atsilenkimai</span>
         <span>Candy 1-2/2 (bandžiau keisti vandens filtrus)</span>
      </section>
   )
}
