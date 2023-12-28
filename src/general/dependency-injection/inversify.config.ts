import 'reflect-metadata'
import { Container } from 'inversify'
import { ILoggerService } from '@general/interfaces/logger.interfaces'
import { ConsoleLoggerService } from '@general/services/console-logger.service'
import { TYPES } from './types'
import { IDayStatsService } from '@general/interfaces/day-stats.interfaces'
import { IndexedDbDayStatsService } from '@general/services/indexed-db-day-stats.service'

const container = new Container()

container
   .bind<ILoggerService>(TYPES.ConsoleLoggerService)
   .to(ConsoleLoggerService)

container
   .bind<IDayStatsService>(TYPES.DayStatsService)
   .to(IndexedDbDayStatsService)

export { container }
