import { SettingsRepository } from 'modules/settings/infra/typeorm/repositories/SettingsRepository';
import { ISettingsRepository } from 'modules/settings/repositories/ISettingsRepository';
import { container } from 'tsyringe';

container.registerSingleton<ISettingsRepository>(
  'SettingsRepository', SettingsRepository,
);
