import { ICreateConnectionsDTO } from 'modules/chats/dtos/ICreateConnectionsDTO';
import { IConnectionsRepository } from 'modules/chats/repositories/IConnectionsRepository';
import { getRepository, Repository } from 'typeorm';

import { Connection } from '../entities/Connection';

class ConnectionsRepository implements IConnectionsRepository {
  private repository: Repository<Connection>

  constructor() {
    this.repository = getRepository(Connection);
  }

  async create({
    id, admin_id, user_id, socket_id,
  }: ICreateConnectionsDTO): Promise<Connection> {
    const connection = this.repository.create({
      id,
      admin_id,
      user_id,
      socket_id,
    });

    await this.repository.save(connection);
    return connection;
  }

  async findByUserId(user_id: string): Promise<Connection> {
    const connection = await this.repository.findOne({ user_id });

    return connection;
  }
}

export { ConnectionsRepository };
