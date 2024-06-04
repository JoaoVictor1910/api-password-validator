import { VALIDATE_PASSWORD_SERVICE_PROXY_NAME } from '@/main/factories/domain/services';
import { ValidatePasswordService } from '@/domain/services';
import { Controller, Inject, Post, Body } from '@nestjs/common';
import { ValidatePasswordDto } from '@/application/dto';

interface ValidatePasswordResponse {
  isValid: boolean;
}

@Controller('v1/password')
export class PasswordController {
  constructor(
    @Inject(VALIDATE_PASSWORD_SERVICE_PROXY_NAME)
    private readonly validateS: ValidatePasswordService,
  ) {}

  @Post('validate')
  validatePassword(
    @Body() params: ValidatePasswordDto,
  ): ValidatePasswordResponse {
    return this.validateS.execute(params);
  }
}
