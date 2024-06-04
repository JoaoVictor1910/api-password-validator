import { Module } from '@nestjs/common';

import {
  GetHealthController,
  PasswordController,
} from '@/application/controllers';
import { ServicesModule } from './services.module';

@Module({
  imports: [ServicesModule],
  providers: [],
  controllers: [PasswordController, GetHealthController],
})
export class ControllersModule {}
