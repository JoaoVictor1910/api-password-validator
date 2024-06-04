import { Logger } from '@/domain/protocols/gateways/logger.interface';
import { Logger as LoggerProvider } from '@nestjs/common';

export class LoggerAdapter implements Logger {
  constructor(private readonly logger: LoggerProvider) {}

  log(ctx: string, msg: string): void {
    this.logger.log(`[INFO] ${msg}`, ctx);
  }

  warn(ctx: string, msg: string): void {
    this.logger.warn(`[WARN] ${msg}`, ctx);
  }

  error(ctx: string, msg: string, trace?: string): void {
    this.logger.error(`[ERROR] ${msg}`, trace, ctx);
  }

  debug(
    msg: string,
    opts: Partial<{ context: string; excludeFields: string[] }>,
  ) {
    if (process.env.ENV !== 'prod') {
      this.logger.debug(`[DEBUG] ${msg}`, opts);
    }
  }
}
