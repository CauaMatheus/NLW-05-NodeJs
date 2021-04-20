import { AppError } from '@errors/AppError';
import { inject, injectable } from 'tsyringe';

import { Setting } from '../infra/typeorm/entities/Setting';
import { ISettingsRepository } from '../repositories/ISettingsRepository';

interface IRequest {
  username: string
  chat?: boolean
}

@injectable()
class CreateSettingUseCase {
  constructor(
    @inject('SettingsRepository')
    private settingsRepository: ISettingsRepository,
  ) { }

  async execute({ username, chat }: IRequest): Promise<Setting> {
    const settingAlreadyExists = await this.settingsRepository.findByUsername(username);
    if (settingAlreadyExists) {
      throw new AppError('Setting already exists');
    }
    const setting = await this.settingsRepository.create({ username, chat });

    return setting;
  }
}

export { CreateSettingUseCase };
