export interface PasswordRules {
  validate: (password: string) => boolean;
}
