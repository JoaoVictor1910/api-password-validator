import { GET_HEALTH_SERVICE_PROXY_NAME } from '@/main/factories/domain/services';
import { GetHealthService } from '@/domain/services';
import { Controller, Inject, Get } from '@nestjs/common';

interface HealthCheckResponse {
  status: string;
}

@Controller()
export class GetHealthController {
  constructor(
    @Inject(GET_HEALTH_SERVICE_PROXY_NAME)
    private readonly service: GetHealthService,
  ) {}

  @Get('health')
  health(): HealthCheckResponse {
    return this.service.execute();
  }
}
