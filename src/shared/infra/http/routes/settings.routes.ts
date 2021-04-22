import { Router } from 'express';
import { CreateSettingController } from 'modules/settings/useCases/createSetting/CreateSettingController';
import { FindByUsernameController } from 'modules/settings/useCases/findByUsername/FindByUsernameController';
import { UpdateSettingsController } from 'modules/settings/useCases/updateSettings/UpdateSettingsController';

const settingsRoutes = Router();

const createSettingController = new CreateSettingController();
const findByUsernameController = new FindByUsernameController();
const updateSettingsController = new UpdateSettingsController();

settingsRoutes.post('/', createSettingController.handle);
settingsRoutes.get('/:username', findByUsernameController.handle);
settingsRoutes.put('/:username', updateSettingsController.handle);

export { settingsRoutes };
