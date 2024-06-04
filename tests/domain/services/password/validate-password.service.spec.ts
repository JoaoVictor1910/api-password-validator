import { ValidatePasswordService } from '@/domain/services';
import { ValidatePasswordError } from '@/infra/errors';
import {
  emptyPasswordInputMock,
  numericPasswordInputMock,
  validPasswordInputMock,
} from '@tests/__mocks__/password.mock';

describe('ValidatePasswordService', () => {
  let sut: ValidatePasswordService;

  beforeEach(() => {
    sut = new ValidatePasswordService();
  });

  it('should return true for valid input', () => {
    const output = sut.execute(validPasswordInputMock);

    expect(output.isValid).toBe(true);
  });

  it('should throw if input is null', () => {
    expect(sut.execute(emptyPasswordInputMock)).rejects.toThrow(
      ValidatePasswordError,
    );
  });

  it('should throw if input type is other than string', () => {
    expect(sut.execute(numericPasswordInputMock)).rejects.toThrow(
      ValidatePasswordError,
    );
  });
});
