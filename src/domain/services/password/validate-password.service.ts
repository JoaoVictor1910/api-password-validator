import { Password } from '@/domain/entity';
import { ValidatePasswordError } from '@/infra/errors';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ValidatePasswordService {
  private logger = new Logger(ValidatePasswordService.name);
  execute(
    params: ValidatePasswordService.Request,
  ): ValidatePasswordService.Response {
    this.logger.log(
      'ValidatePasswordService[execute]',
      'Validating password...',
    );

    const { input } = params;

    // Second validation. After the dto, before the validate method
    if (!input || typeof input !== 'string') {
      throw new ValidatePasswordError('input is invalid.');
    }

    const passwordEntity = Password.create({ input });

    this.logger.log('ValidatePasswordService[execute]', `Password validated.`);

    return { isValid: passwordEntity.IsValid };
  }
}

export namespace ValidatePasswordService {
  export type Request = {
    input: string;
  };
  export type Response = { isValid: boolean };
}
