import { Setting } from 'modules/settings/infra/typeorm/entities/Setting';
import { ISettingsRepository } from 'modules/settings/repositories/ISettingsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  username: string
}

@injectable()
class FindByUsernameUseCase {
  constructor(
    @inject('SettingsRepository')
    private settingsRepository: ISettingsRepository,
  ) { }

  async execute({ username }: IRequest): Promise<Setting> {
    const setting = await this.settingsRepository.findByUsername(username);

    return setting;
  }
}

export { FindByUsernameUseCase };
