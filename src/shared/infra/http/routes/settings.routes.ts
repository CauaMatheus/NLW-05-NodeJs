import { Router } from 'express';
import { CreateSettingController } from 'modules/settings/useCases/CreateSettingController';

const settingsRoutes = Router();

const createSettingController = new CreateSettingController();

settingsRoutes.post('/', createSettingController.handle);

export { settingsRoutes };
