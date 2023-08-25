export const v1ModulePrefix = '/api/v1';

import { RouteConfigInterface } from '../shared/interface/route-config.interface';
import { loginRoute } from './common/login/login.route';

export const v1ModuleRoutes: RouteConfigInterface[] = [
  loginRoute
];
