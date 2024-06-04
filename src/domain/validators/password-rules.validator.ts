export class PasswordRulesValidator {
  static validate(password: string): boolean {
    const hasMinLength = password.length >= 9;
    const hasDigit = /[0-9]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()\-+]/.test(password);
    const hasNoRepeatedCharacters = new Set(password).size === password.length;

    return (
      hasMinLength &&
      hasDigit &&
      hasLowercase &&
      hasUppercase &&
      hasSpecialCharacter &&
      hasNoRepeatedCharacters
    );
  }
}
