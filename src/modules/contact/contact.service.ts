import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/database/prisma.service';

 

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(createContactDTO: CreateContactDto, userId:string) {
    const contact = new Contact();
    Object.assign(contact, {
      ...createContactDTO,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        createdAt: contact.createdAt,
        userId,
      },
    });
    return newContact;
  }

  async findOne(id: string) {
    const contact = await this.prisma.contact.findFirst({
      where: { id },
    });
    return contact;
  }

  async findAll() {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }
}
