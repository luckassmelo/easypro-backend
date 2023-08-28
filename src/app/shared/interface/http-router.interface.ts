import { RouteConfigInterface } from './route-config.interface';

export interface HttpRouterInterface {
  init(routes: RouteConfigInterface[]): void;
}
