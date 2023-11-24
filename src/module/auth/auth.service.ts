import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { ClientsService } from '../clients/clients.service';

@Injectable()
export class AuthService {
  constructor(
    private clientService: ClientsService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.clientService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!user.isEmailConfirmed) {
      throw new ForbiddenException('Account not confirmed');
    }
    const passwordMatch = await compare(password, user.senha);

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return {
      token: this.jwtService.sign({ email: email }, { subject: user.id }),
    };
  }
}
