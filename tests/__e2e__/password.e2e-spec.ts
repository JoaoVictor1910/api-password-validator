import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { VALIDATE_PASSWORD_SERVICE_PROXY } from '@/main/factories/domain/services';
import { PasswordController } from '@/application/controllers';
import { validPasswordInputMock } from '@tests/__mocks__/password.mock';

describe('PasswordService', () => {
  let server: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VALIDATE_PASSWORD_SERVICE_PROXY],
      controllers: [PasswordController],
    }).compile();

    server = module.createNestApplication();
    await server.init();
  });

  afterEach(async () => {
    await server?.close();
  });

  describe('ValidatePassword', () => {
    it('[POST] => /v1/password/validate', async () => {
      const response = await request(server.getHttpServer())
        .post('/v1/password/validate')
        .send(validPasswordInputMock);

      expect(response.status).toBe(201);
      expect(response.body.isValid).toBe(true);
    });
  });
});
