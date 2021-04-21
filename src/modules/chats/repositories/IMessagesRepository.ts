import { ICreateMessagesDTO } from '../dtos/ICreateMessagesDTO';
import { Message } from '../infra/typeorm/entities/Message';

interface IMessagesRepository {
  create(data: ICreateMessagesDTO): Promise<Message>
  listByUserId(user_id: string): Promise<Message[]>
}

export { IMessagesRepository };
