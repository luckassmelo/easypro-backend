import { RouteConfigInterface } from '../../../shared/interface/route-config.interface';
import { v1ModulePrefix } from '../../v1';
import { loginController } from './login.implementation';

export const loginRoute: RouteConfigInterface = {
  controller: loginController,
  method: 'get',
  url: `${v1ModulePrefix}/common/login`
};
