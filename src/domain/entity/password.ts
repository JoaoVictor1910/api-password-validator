import { PasswordRules } from '@/domain/protocols';

export class Password {
  private props: PasswordProps;
  private passwordRules: PasswordRules;

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
    return this.passwordRules.validate(this.password);
  }
}

export type PasswordProps = {
  input: string;
};
