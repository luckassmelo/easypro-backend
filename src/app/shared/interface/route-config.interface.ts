import { ControllerInterface } from './controller.interface';

export interface RouteConfigInterface {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  controller: ControllerInterface;
}
