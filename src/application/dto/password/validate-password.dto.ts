import { IsNotEmpty, IsString } from 'class-validator';

export class ValidatePasswordDto {
  @IsString()
  @IsNotEmpty()
  input: string;
}
