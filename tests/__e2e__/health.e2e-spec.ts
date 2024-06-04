import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { GET_HEALTH_SERVICE_PROXY } from '@/main/factories/domain/services';
import { GetHealthController } from '@/application/controllers';

describe('HealthCheckerService', () => {
  let server: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GET_HEALTH_SERVICE_PROXY],
      controllers: [GetHealthController],
    }).compile();

    server = module.createNestApplication();
    await server.init();
  });

  afterEach(async () => {
    await server?.close();
  });

  describe('CheckHealth', () => {
    it('[GET] => /health', async () => {
      const response = await request(server.getHttpServer()).get('/health');

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).status).toBe(
        'api-password-validator up!',
      );
    });
  });
});
