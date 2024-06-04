import { Logger as LoggerProvider } from '@nestjs/common';
import { LoggerAdapter } from '@/infra/gateways';
import { MockProxy, mock } from 'jest-mock-extended';

describe('LoggerAdapter', () => {
  let logger: MockProxy<LoggerProvider>;
  let sut: LoggerAdapter;

  const envs = process.env;

  beforeAll(() => {
    logger = mock();
    logger.log.mockReturnThis();
    logger.warn.mockReturnThis();
    logger.error.mockReturnThis();
    logger.debug.mockReturnThis();
  });

  beforeEach(() => {
    sut = new LoggerAdapter(logger);

    jest.resetModules();
    process.env = { ...envs };
  });

  afterEach(() => {
    process.env = envs;
  });

  describe('log', () => {
    it('should call log with correct params', () => {
      sut.log('fake_context', 'fake_message');

      expect(logger.log).toHaveBeenCalledWith(
        '[INFO] fake_message',
        'fake_context',
      );
      expect(logger.log).toHaveBeenCalledTimes(1);
    });
  });

  describe('warn', () => {
    it('should call warn with correct params', () => {
      sut.warn('fake_context', 'fake_message');

      expect(logger.warn).toHaveBeenCalledWith(
        '[WARN] fake_message',
        'fake_context',
      );
      expect(logger.warn).toHaveBeenCalledTimes(1);
    });
  });

  describe('error', () => {
    it('should call error with correct params', () => {
      sut.error('fake_context', 'fake_message', 'fake_trace');

      expect(logger.error).toHaveBeenCalledWith(
        '[ERROR] fake_message',
        'fake_trace',
        'fake_context',
      );
      expect(logger.error).toHaveBeenCalledTimes(1);
    });
  });

  describe('debug', () => {
    it('should not call super.debug if ENV is prod', () => {
      process.env.ENV = 'prod';

      sut.debug('fake_message', {
        context: 'fake_context',
        excludeFields: null,
      });

      expect(logger.debug).not.toHaveBeenCalled();
    });

    it('should call super.debug with correct params', () => {
      sut.debug('fake_message', {
        context: 'fake_context',
        excludeFields: null,
      });

      expect(logger.debug).toHaveBeenCalledWith('[DEBUG] fake_message', {
        context: 'fake_context',
        excludeFields: null,
      });
      expect(logger.debug).toHaveBeenCalledTimes(1);
    });
  });
});
