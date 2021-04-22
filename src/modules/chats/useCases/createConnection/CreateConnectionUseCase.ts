import { IConnectionsRepository } from 'modules/chats/repositories/IConnectionsRepository';
import { IMessagesRepository } from 'modules/chats/repositories/IMessagesRepository';
import { IUsersRepository } from 'modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  admin_id?: string
  email: string
  text: string
  socket_id: string
}

@injectable()
class CreateConnectionUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) { }

  async execute({
    email, text, admin_id, socket_id,
  }: IRequest): Promise<void> {
    const userExists = await this.usersRepository.findByEmail(email);
    let userId: string;

    if (!userExists) {
      const user = await this.usersRepository.create({ email });
      userId = user.id;

      await this.connectionsRepository.create({
        admin_id,
        user_id: user.id,
        socket_id,
      });
    } else {
      const connection = await this.connectionsRepository.findByUserId(userExists.id);
      userId = userExists.id;

      if (!connection) {
        await this.connectionsRepository.create({
          admin_id,
          user_id: userExists.id,
          socket_id,
        });
      } else {
        connection.socket_id = socket_id;

        await this.connectionsRepository.create(connection);
      }
    }

    await this.messagesRepository.create({
      text,
      admin_id,
      user_id: userId,
    });
  }
}

export { CreateConnectionUseCase };
