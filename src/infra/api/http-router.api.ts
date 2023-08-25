import { HttpRouterInterface } from '../../app/shared/interface/http-router.interface';
import { HttpServerInterface } from '../../app/shared/interface/http-server.interface';
import { RouteConfigInterface } from '../../app/shared/interface/route-config.interface';
import { v1ModuleRoutes } from '../../app/v1/v1';

export class HttpRouter implements HttpRouterInterface {
  private httpServerInstance: HttpServerInterface;
  private routes: RouteConfigInterface[] = [];

  constructor(httpServerInstance: HttpServerInterface) {
    this.httpServerInstance = httpServerInstance;
    this.routes = [
      ...v1ModuleRoutes
    ];
  }

  init(): void {
    for (const route of this.routes) {
      this.httpServerInstance.on(route.method, route.url, async (params: unknown) => {
        const controller = route.controller;
        return await controller.handle(params);
      });
    }
  }
}
