import { inject, injectable } from 'inversify'
import { TYPES } from '@general/dependency-injection/types'
import type { IDayStatsService } from '@general/interfaces/day-stats.interfaces'
import type { ILoggerService } from '@general/interfaces/logger.interfaces'

@injectable()
export class IndexedDbDayStatsService implements IDayStatsService {
   @inject(TYPES.ConsoleLoggerService)
   logService!: ILoggerService

   getAll() {
      this.logService.info('IndexedDbDayStatsService | getAll')
   }
}
