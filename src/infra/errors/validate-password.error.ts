import { BaseApplicationError } from '@/shared/errors/base-application-error';

export class ValidatePasswordError extends BaseApplicationError {
  constructor(details?: string) {
    super({
      message: 'Error on validating password.',
      details,
      statusCode: 400,
    });
  }
}
