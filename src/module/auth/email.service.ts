import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gerenciadordetoken@gmail.com',
        pass: 'ipvi kyqu exec zbea',

      },
    });
  }

  async sendConfirmationEmail(to: string, token: string) {
    const mailOptions = {
      from: 'seu-email@gmail.com',
      to: to,
      subject: 'Confirme seu e-mail',
      text: `Seu token de confirmação é ${token}`,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
