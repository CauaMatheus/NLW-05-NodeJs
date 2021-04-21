import { AppError } from '@errors/AppError';
import { User } from 'modules/users/infra/typeorm/entities/User';
import { IUsersRepository } from 'modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  email: string
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ email }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new AppError('User already exist');
    }

    const user = await this.usersRepository.create({ email });

    return user;
  }
}
export { CreateUserUseCase };
