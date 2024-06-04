import { Password } from '@/domain/entity';
import {
  validPasswordInputMock,
  noCharInvalidPasswordInputMock,
  noUpperCaseInvalidPasswordInputMock,
  noLoweCaseInvalidPasswordInputMock,
  noSpecialCharInvalidPasswordInputMock,
  repetitiveCharInvalidPasswordInputMock,
  repetitiveUpperInvalidPasswordInputMock,
  spaceInvalidPasswordInputMock,
} from '@tests/__mocks__/password.mock';

describe('PasswordEntity', () => {
  describe('getPassword', () => {
    it('should return password', () => {
      const books = Password.create(validPasswordInputMock);
      expect(books.password).toBe(validPasswordInputMock.input);
    });
  });
  describe('IsValid', () => {
    it('should return true', () => {
      const books = Password.create(validPasswordInputMock);
      expect(books.IsValid).toBe(true);
    });
    it('should return false for empty ""', () => {
      const books = Password.create(noCharInvalidPasswordInputMock);
      expect(books.IsValid).toBe(false);
    });
    it('should return false for no UpperCase', () => {
      const books = Password.create(noUpperCaseInvalidPasswordInputMock);
      expect(books.IsValid).toBe(false);
    });
    it('should return false for no LowerCase', () => {
      const books = Password.create(noLoweCaseInvalidPasswordInputMock);
      expect(books.IsValid).toBe(false);
    });
    it('should return false for no special character', () => {
      const books = Password.create(noSpecialCharInvalidPasswordInputMock);
      expect(books.IsValid).toBe(false);
    });
    it('should return false for repetitive lower case characters', () => {
      const books = Password.create(repetitiveCharInvalidPasswordInputMock);
      expect(books.IsValid).toBe(false);
    });
    it('should return false for repetitive upper case characters', () => {
      const books = Password.create(repetitiveUpperInvalidPasswordInputMock);
      expect(books.IsValid).toBe(false);
    });
    it('should return false for space on input', () => {
      const books = Password.create(spaceInvalidPasswordInputMock);
      expect(books.IsValid).toBe(false);
    });
  });
});
