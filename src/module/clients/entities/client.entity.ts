import { Exclude } from 'class-transformer';
import { Contact } from 'src/module/contacts/entities/contact.entity';

export class Client {
  id: string;
  fullName: string;
  email: string;
  @Exclude()
  senha: string;
  phoneNumber: string;
  isEmailConfirmed: boolean;
  registerDate: Date;
  contatos: Contact[];
}
