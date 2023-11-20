import { ConflictException, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) { }
  async create(createClientDto: CreateClientDto) {
    const findUser = await this.prisma.client.findFirst({
      where: { email: createClientDto.email },
    });
    if (findUser) {
      throw new ConflictException('Email Already exists');
    }
    const client = new Client();
    Object.assign(client, {
      ...createClientDto,
    });

    const newClient = await this.prisma.client.create({
      data: {
        nomeCompleto: createClientDto.nomeCompleto,
        email: createClientDto.email,
        senha: createClientDto.senha,
        telefone: createClientDto.telefone,
      },
    });

    return plainToInstance(Client, newClient);
  }

  findAll() {
    return `This action returns all clients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
