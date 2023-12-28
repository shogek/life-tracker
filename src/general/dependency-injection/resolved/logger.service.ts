import { ILoggerService } from '@general/interfaces/logger.interfaces'
import { TYPES } from '../types'
import { container } from '../inversify.config'

export const loggerService = container.get<ILoggerService>(
   TYPES.ConsoleLoggerService,
)
