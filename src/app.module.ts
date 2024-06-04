import { Module } from '@nestjs/common';
import { ControllersModule } from './main/modules/controllers.module';
import { ServicesModule } from './main/modules/services.module';

@Module({
  imports: [ControllersModule, ServicesModule],
})
export class AppModule {}
