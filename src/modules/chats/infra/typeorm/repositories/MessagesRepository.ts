import { ICreateMessagesDTO } from 'modules/chats/dtos/ICreateMessagesDTO';
import { getRepository, Repository } from 'typeorm';

import { IMessagesRepository } from '../../../repositories/IMessagesRepository';
import { Message } from '../entities/Message';

class MessagesRepository implements IMessagesRepository {
  private repository: Repository<Message>

  constructor() {
    this.repository = getRepository(Message);
  }

  async create({ admin_id, text, user_id }: ICreateMessagesDTO): Promise<Message> {
    const message = this.repository.create({
      admin_id,
      user_id,
      text,
    });

    await this.repository.save(message);
    return message;
  }

  async listByUserId(user_id: string): Promise<Message[]> {
    const messages = await this.repository.find({ where: { user_id }, relations: ['user'] });

    return messages;
  }
}

export { MessagesRepository };
