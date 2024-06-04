import { PasswordRulesValidator } from '@/domain/validators/password-rules.validator';

export class Password {
  private props: PasswordProps;

  private constructor(props: PasswordProps) {
    this.props = props;
  }

  static create(props: PasswordProps): Password {
    return new Password(props);
  }

  get password(): string {
    return this.props.input;
  }

  get IsValid(): boolean {
    return PasswordRulesValidator.validate(this.password);
  }
}

export type PasswordProps = {
  input: string;
};
