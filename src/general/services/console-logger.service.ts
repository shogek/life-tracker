import { injectable } from 'inversify'
import { ILoggerService } from '@general/interfaces/logger.interfaces'

@injectable()
export class ConsoleLoggerService implements ILoggerService {
   info(params: any): void {
      console.log(params)
   }
}
