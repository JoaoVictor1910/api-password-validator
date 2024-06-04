import { GetHealthService } from '@/domain/services';

describe('GetHealthService', () => {
  let sut: GetHealthService;

  beforeEach(() => {
    sut = new GetHealthService();
  });

  it('should be able to get the app health status', () => {
    const health = sut.execute();

    expect(health.status).toBe('api-password-validator up!');
  });
});
