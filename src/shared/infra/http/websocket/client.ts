import { CreateConnectionController } from 'modules/chats/useCases/createConnection/CreateConnectionController';

import { io } from '../http';

const createConnectionController = new CreateConnectionController();

io.on('connect', createConnectionController.handle);
