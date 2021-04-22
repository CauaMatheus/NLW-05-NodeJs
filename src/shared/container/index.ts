import { ConnectionsRepository } from 'modules/chats/infra/typeorm/repositories/ConnectionsRepository';
import { MessagesRepository } from 'modules/chats/infra/typeorm/repositories/MessagesRepository';
import { IConnectionsRepository } from 'modules/chats/repositories/IConnectionsRepository';
import { IMessagesRepository } from 'modules/chats/repositories/IMessagesRepository';
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

container.registerSingleton<IMessagesRepository>(
  'MessagesRepository', MessagesRepository,
);

container.registerSingleton<IConnectionsRepository>(
  'ConnectionsRepository', ConnectionsRepository,
);
