import { Router } from 'express';
import { CreateMessageController } from 'modules/chats/useCases/createMessage/CreateMessageController';
import { ListMessagesByUserIdController } from 'modules/chats/useCases/listMessagesByUserId/ListMessagesByUserIdController';

const chatsRoutes = Router();

const createMessageController = new CreateMessageController();
const listMessagesByUserIdController = new ListMessagesByUserIdController();

chatsRoutes.post('/messages', createMessageController.handle);
chatsRoutes.get('/messages/:user_id', listMessagesByUserIdController.handle);

export { chatsRoutes };
