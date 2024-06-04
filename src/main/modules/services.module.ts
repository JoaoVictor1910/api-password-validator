import { Module } from '@nestjs/common';

import {
  GET_HEALTH_SERVICE_PROXY,
  GET_HEALTH_SERVICE_PROXY_NAME,
} from '../factories/domain/services';
import {
  VALIDATE_PASSWORD_SERVICE_PROXY,
  VALIDATE_PASSWORD_SERVICE_PROXY_NAME,
} from '../factories/domain/services/password/validate-password-service.factory';
@Module({
  imports: [],
  providers: [GET_HEALTH_SERVICE_PROXY, VALIDATE_PASSWORD_SERVICE_PROXY],
  exports: [
    GET_HEALTH_SERVICE_PROXY_NAME,
    VALIDATE_PASSWORD_SERVICE_PROXY_NAME,
  ],
})
export class ServicesModule {}
