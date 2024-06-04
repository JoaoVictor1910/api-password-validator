export interface Logger {
  log: (ctx: string, msg: string) => void;
  warn: (ctx: string, msg: string) => void;
  error: (ctx: string, msg: string, trace?: any) => void;
  debug: (
    msg: string,
    opts: Partial<{ context: string; excludeFields: string[] }>,
  ) => void;
}
