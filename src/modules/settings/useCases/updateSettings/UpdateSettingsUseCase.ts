import { AppError } from '@errors/AppError';
import { Setting } from 'modules/settings/infra/typeorm/entities/Setting';
import { ISettingsRepository } from 'modules/settings/repositories/ISettingsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  username: string
  chat: boolean
}

@injectable()
class UpdateSettingsUseCase {
  constructor(
    @inject('SettingsRepository')
    private settingsRepository: ISettingsRepository,
  ) { }

  async execute({ username, chat }: IRequest): Promise<Setting> {
    const setting = await this.settingsRepository.findByUsername(username);
    if (!setting) {
      throw new AppError('Setting not found', 404);
    }

    setting.chat = chat;
    await this.settingsRepository.create(setting);

    return setting;
  }
}

export { UpdateSettingsUseCase };
