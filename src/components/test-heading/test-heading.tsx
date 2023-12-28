import { getTodayDate } from '@general/helpers/date.helpers'
import { dayStatsService } from '@general/dependency-injection/resolved/day-stats.service'
import s from './test-heading.module.scss'

export function TestHeading() {
   dayStatsService.getAll()

   return (
      <h1 className={s.title}>
         My title at <span>{getTodayDate()}</span>
      </h1>
   )
}
