import { Module } from '@nestjs/common';

import {
  GET_HEALTH_SERVICE_PROXY,
  GET_HEALTH_SERVICE_PROXY_NAME,
} from '../factories/domain/services';
@Module({
  imports: [],
  providers: [GET_HEALTH_SERVICE_PROXY],
  exports: [GET_HEALTH_SERVICE_PROXY_NAME],
})
export class ServicesModule {}
