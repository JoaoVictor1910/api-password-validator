import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@/app.module';
import * as request from 'supertest';

describe('GetHealthController', () => {
  let server: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    server = module.createNestApplication();
    await server.init();
  });

  it('should be able to get app health status', async () => {
    const response = await request(server.getHttpServer())
      .get('/health')
      .send();

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('api-password-validator up!');
  });
});
