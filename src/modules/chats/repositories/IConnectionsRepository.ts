import { ICreateConnectionsDTO } from '../dtos/ICreateConnectionsDTO';
import { Connection } from '../infra/typeorm/entities/Connection';

interface IConnectionsRepository {
  create(data: ICreateConnectionsDTO): Promise<Connection>
  findByUserId(user_id: string): Promise<Connection>
}

export { IConnectionsRepository };
