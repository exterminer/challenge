import { IsString, IsEmail, IsNotEmpty, IsOptional, isString } from 'class-validator';
import { Exclude } from 'class-transformer';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  nomeCompleto: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsString()
  @IsOptional()
  telefone?: string;
}
