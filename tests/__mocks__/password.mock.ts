import { ValidatePasswordDto } from '@/application/dto';

export const validPasswordInputMock: ValidatePasswordDto = {
  input: 'AbTp9!fok',
};

export const emptyPasswordInputMock: ValidatePasswordDto = {
  input: null,
};

export const numericPasswordInputMock: any = {
  input: 0,
};
