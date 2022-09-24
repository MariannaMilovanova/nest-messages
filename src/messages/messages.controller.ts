import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    //Dont do this, use dependency injection
    this.messagesService = new MessagesService();
  }
  @Get()
  listMessages() {
    return this.messagesService.findALL();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    this.messagesService.findOne(id);
  }
}
