import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.startAllMicroservices();

  await app.listen(process.env.HTTP_PORT, '0.0.0.0', () =>
    console.log(`Listening on port ${process.env.HTTP_PORT}.`),
  );
}

bootstrap();