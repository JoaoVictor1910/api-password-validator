import { ValidatePasswordService } from '@/domain/services/password/validate-password.service';
import { factoryProvider } from '@/main/factories';
import { Provider } from '@nestjs/common';

export const VALIDATE_PASSWORD_SERVICE_PROXY_NAME =
  'ValidatePasswordServiceProxy';

export const VALIDATE_PASSWORD_SERVICE_PROXY: Provider = factoryProvider({
  inject: [],
  provide: VALIDATE_PASSWORD_SERVICE_PROXY_NAME,
  useFactory: () => {
    return new ValidatePasswordService();
  },
});
