import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { ContactDto } from './contact.dto';

@Injectable()
export class ContactService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendContactEmail(contactDto: ContactDto): Promise<void> {
    const { name, email, subject, message } = contactDto;
    const recipient = this.configService.get<string>('MAIL_TO');

    try {
      await this.mailerService.sendMail({
        to: recipient,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h3>New Message from Portfolio Contact Form</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; padding: 10px; background-color: #f5f5f5; border-left: 3px solid #00ffaa;">${message}</p>
        `,
      });
    } catch (error) {
      console.error('SMTP Email sending error:', error);
      throw new InternalServerErrorException(
        'Failed to send email via SMTP server',
      );
    }
  }
}
