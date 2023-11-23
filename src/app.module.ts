import { Module } from '@nestjs/common';

import { ClientsModule } from './module/clients/clients.module';
import { ContactsModule } from './module/contacts/contacts.module';

import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [ContactsModule, ClientsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
