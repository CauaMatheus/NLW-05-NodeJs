import { ICreateUsersDTO } from 'modules/users/dtos/ICreateUsersDTO';
import { IUsersRepository } from 'modules/users/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';

import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ id, email }: ICreateUsersDTO): Promise<User> {
    const user = this.repository.create({
      id,
      email,
    });

    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }
}

export { UsersRepository };
