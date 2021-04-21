import { Router } from 'express';

import { chatsRoutes } from './chats.routes';
import { settingsRoutes } from './settings.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/settings', settingsRoutes);
router.use('/users', usersRoutes);
router.use('/chats', chatsRoutes);

export { router };
