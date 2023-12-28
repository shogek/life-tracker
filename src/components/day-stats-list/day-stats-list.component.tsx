import { DayStats, DayStatsProps } from '@components/day-stats'
// import { DayStatsListProps } from './types'
import s from './day-stats-list.module.scss'
import { DayStatsListProps } from './types'

const DAY_STATS: DayStatsProps[] = [
   {
      date: new Date(Date.UTC(2023, 11, 28, 0, 0, 0)),
      achievements: [],
   },
   {
      date: new Date(Date.UTC(2023, 11, 27, 0, 0, 0)),
      achievements: [],
   },
   {
      date: new Date(Date.UTC(2023, 11, 26, 0, 0, 0)),
      achievements: [],
   },
   {
      date: new Date(Date.UTC(2023, 11, 25, 0, 0, 0)),
      achievements: [],
   },
   {
      date: new Date(Date.UTC(2023, 11, 24, 0, 0, 0)),
      achievements: [],
   },
   {
      date: new Date(Date.UTC(2023, 11, 23, 0, 0, 0)),
      achievements: [],
   },
   {
      date: new Date(Date.UTC(2023, 11, 22, 0, 0, 0)),
      achievements: [],
   },
   {
      date: new Date(Date.UTC(2023, 11, 21, 0, 0, 0)),
      achievements: [],
   },
]

export function DayStatsList({}: DayStatsListProps) {
   return (
      <ul className={s.wrapper}>
         {DAY_STATS.map((dayStat) => (
            <li>
               <DayStats key={dayStat.date.toISOString()} {...dayStat} />
            </li>
         ))}
      </ul>
   )
}
