import { IsString } from 'class-validator';

export class ValidatePasswordDto {
  @IsString()
  input: string;
}
