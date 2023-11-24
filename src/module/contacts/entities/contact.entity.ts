import { Client } from 'src/module/clients/entities/client.entity';

export class Contact {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  registerDate: Date;
  clientId: Client;
}
