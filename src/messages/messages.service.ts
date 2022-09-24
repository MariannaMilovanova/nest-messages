import { MessageRepository } from './message.repository';

export class MessagesService {
  messageRepo: MessageRepository;

  constructor() {
    //Service is creating own dependencies
    //DONT DO THIS ON REAL APPS
    this.messageRepo = new MessageRepository();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findALL() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
