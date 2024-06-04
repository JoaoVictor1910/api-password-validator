import { ValidatePasswordDto } from '@/application/dto';

export const validPasswordInputMock: ValidatePasswordDto = {
  input: 'AbTp9!fok',
};

export const noCharInvalidPasswordInputMock: ValidatePasswordDto = {
  input: '',
};

export const noUpperCaseInvalidPasswordInputMock: ValidatePasswordDto = {
  input: 'ab',
};

export const noLoweCaseInvalidPasswordInputMock: ValidatePasswordDto = {
  input: 'AB',
};

export const noSpecialCharInvalidPasswordInputMock: ValidatePasswordDto = {
  input: 'AAAbbbCc',
};

export const repetitiveCharInvalidPasswordInputMock: ValidatePasswordDto = {
  input: 'AbTp9!foo',
};

export const repetitiveUpperInvalidPasswordInputMock: ValidatePasswordDto = {
  input: 'AbTp9!foA',
};

export const spaceInvalidPasswordInputMock: ValidatePasswordDto = {
  input: 'AbTp9 fok',
};

export const emptyPasswordInputMock: ValidatePasswordDto = {
  input: null,
};

export const numericPasswordInputMock: any = {
  input: 0,
};
