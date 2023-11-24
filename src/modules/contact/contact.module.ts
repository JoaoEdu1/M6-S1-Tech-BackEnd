import { Module } from '@nestjs/common';
import { ContactsService } from './contact.service';
import { ContactController } from './contact.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ContactController],
  providers: [ContactsService, PrismaService],
})
export class ContactModule {}
