import { Message } from 'modules/chats/infra/typeorm/entities/Message';
import { IMessagesRepository } from 'modules/chats/repositories/IMessagesRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  admin_id?: string
  user_id: string
  text: string
}

@injectable()
class CreateMessageUseCase {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) { }
  async execute({ admin_id, text, user_id }: IRequest): Promise<Message> {
    const message = await this.messagesRepository.create({ admin_id, text, user_id });

    return message;
  }
}

export { CreateMessageUseCase };
