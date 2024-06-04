export class BaseApplicationError extends Error {
  readonly statusCode: number = 500;
  readonly details?: string;

  constructor(params: BaseApplicationErrorProps) {
    super(params.message);

    this.statusCode = params.statusCode;
    this.details = params.details;
  }
}

export type BaseApplicationErrorProps = {
  message: string;
  statusCode?: number;
  details?: string;
};
