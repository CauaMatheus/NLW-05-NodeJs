import { SettingsRepository } from 'modules/settings/infra/typeorm/repositories/SettingsRepository';
import { ISettingsRepository } from 'modules/settings/repositories/ISettingsRepository';
import { UsersRepository } from 'modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from 'modules/users/repositories/IUsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<ISettingsRepository>(
  'SettingsRepository', SettingsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository', UsersRepository,
);
