import { getTodayDate } from '@general/helpers/date.helpers'
import s from './test-heading.module.scss'

export function TestHeading() {
   return (
      <h1 className={s.title}>
         My title at <span>{getTodayDate()}</span>
      </h1>
   )
}
