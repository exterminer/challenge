import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { Client } from 'src/module/clients/entities/client.entity';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  clientId: string;
}
