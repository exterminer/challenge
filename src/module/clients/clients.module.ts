import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { PrismaService } from 'src/database/prisma.service';
import { EmailService } from '../auth/email.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, PrismaService, EmailService],
  exports: [ClientsService],
})
export class ClientsModule {}
