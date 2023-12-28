import { IDayStatsService } from '@general/interfaces/day-stats.interfaces'
import { container } from '../inversify.config'
import { TYPES } from '../types'

export const dayStatsService = container.get<IDayStatsService>(
   TYPES.DayStatsService,
)
