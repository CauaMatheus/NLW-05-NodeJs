import { ICreateSettingsDTO } from 'modules/settings/dtos/ICreateSettingsDTO';
import { ISettingsRepository } from 'modules/settings/repositories/ISettingsRepository';
import { getRepository, Repository } from 'typeorm';

import { Setting } from '../entities/Setting';

class SettingsRepository implements ISettingsRepository {
  private repository: Repository<Setting>

  constructor() {
    this.repository = getRepository(Setting);
  }

  async create({ id, username, chat }: ICreateSettingsDTO): Promise<Setting> {
    const setting = this.repository.create({
      id,
      username,
      chat,
    });

    await this.repository.save(setting);
    return setting;
  }

  async findByUsername(username: string): Promise<Setting> {
    const setting = await this.repository.findOne({ username });

    return setting;
  }
}

export { SettingsRepository };
