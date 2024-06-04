import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@/app.module';
import * as request from 'supertest';
import { validPasswordInputMock } from '@tests/__mocks__/password.mock';

describe('GetHealthController', () => {
  let server: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    server = module.createNestApplication();
    await server.init();
  });

  it('should be able to get app response', async () => {
    const response = await request(server.getHttpServer())
      .post('/v1/password/validate')
      .send(validPasswordInputMock);

    expect(response.status).toBe(201);
    expect(response.body.isValid).toBe(true);
  });
});
