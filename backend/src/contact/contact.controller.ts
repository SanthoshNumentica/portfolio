import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async submitContactForm(@Body() contactDto: ContactDto) {
    await this.contactService.sendContactEmail(contactDto);
    return {
      success: true,
      message: 'Message sent successfully',
    };
  }
}
