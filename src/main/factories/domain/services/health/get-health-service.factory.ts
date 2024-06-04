import { GetHealthService } from '@/domain/services/health/get-health.service';
import { factoryProvider } from '@/main/factories';
import { Provider } from '@nestjs/common';

export const GET_HEALTH_SERVICE_PROXY_NAME = 'GetHealthServiceProxy';

export const GET_HEALTH_SERVICE_PROXY: Provider = factoryProvider({
  inject: [],
  provide: GET_HEALTH_SERVICE_PROXY_NAME,
  useFactory: () => {
    return new GetHealthService();
  },
});
