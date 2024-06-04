import { Module } from '@nestjs/common';

import { GetHealthController } from '@/application/controllers';
import { ServicesModule } from './services.module';

@Module({
  imports: [ServicesModule],
  providers: [],
  controllers: [GetHealthController],
})
export class ControllersModule {}
