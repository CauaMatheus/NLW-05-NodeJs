import { Message } from 'modules/chats/infra/typeorm/entities/Message';
import { IMessagesRepository } from 'modules/chats/repositories/IMessagesRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  user_id: string
}

@injectable()
class ListMessagesByUserIdUseCase {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) { }

  async execute({ user_id }: IRequest): Promise<Message[]> {
    const messages = await this.messagesRepository.listByUserId(user_id);

    return messages;
  }
}

export { ListMessagesByUserIdUseCase };
