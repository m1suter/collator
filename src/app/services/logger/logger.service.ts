import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  public consoleLog(logger: string, methodName: string, message: string): void {
    if (!environment.production)  {
      console.log(this.formatMessage(logger, methodName, message));
    }
  }

  public consoleError(logger: string, methodName: string, message: string): void {
    if (!environment.production)  {
      console.error(this.formatMessage(logger, methodName, message));
    }
  }

  private formatMessage(logger: string, methodName: string, message: string): string  {
    const formatted: string = ' ' + logger + '.' + methodName + '() ';
    return new Date().toLocaleString().replace(',', '') + formatted + message;
  }
}
